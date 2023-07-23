import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Note } from '../interfaces/note.interface';
import { Subject, firstValueFrom } from 'rxjs';
import { apiHost, headerWithToken } from './configs';

@Injectable({
  providedIn: 'root'
})
export class NotesService implements OnInit {

  // Add
  showAddNoteModal: boolean = false;
  addNoteModalColor: string = 'white';

  // Update
  updateNoteItem: Note | undefined;
  showUpdateNoteModal: boolean = false;

  // View
  viewNoteItem: Note | undefined;
  showViewNoteModal: boolean = false;

  notes: Note[];

  constructor(private http: HttpClient) {
    this.notes = [];
    this.getNotes();
  }

  ngOnInit(): void {
    this.getNotes();
  }

  async getNotes(): Promise<void> {
    const token: string = localStorage.getItem('token')!;

    const response = await firstValueFrom(
      this.http.get<Note[]>(
        `${apiHost}/notes`,
        {
          headers: headerWithToken(token),
          observe: 'response'
        }
      )
    );

    if (response.ok) {
      this.notes = response.body ?? [];

      this.notes.sort((a, b) => {
        if (a.created_at < b.created_at) return 1;
        else return 0;
      });
    }
  }

  async addNote(title: string, content: string, color: string): Promise<void> {
    const token: string = localStorage.getItem('token')!;

    console.log(token);

    const response = await firstValueFrom(
      this.http.post<Note>(
        `${apiHost}/notes`,
        {
          title,
          content,
          color
        },
        {
          headers: headerWithToken(token),
          observe: 'response'
        }
      )
    );

    if (response.ok) {
      const note = response.body!;

      this.notes.unshift(note);
    }


  }

  async updateNote(id: string, title: string, content: string): Promise<void> {
    const token: string = localStorage.getItem('token')!;

    const response = await firstValueFrom(
      this.http.put<Note>(
        `${apiHost}/notes/${id}`,
        {
          title,
          content
        },
        {
          headers: headerWithToken(token),
          observe: 'response'
        }
      )
    );

    if (response.ok) {
      const note = this.notes.find((n) => n.id == id);

      if (note) {
        note.title = title;
        note.content = content;
      }
    }
  }

  async deleteNote(id: string): Promise<void> {
    const token: string = localStorage.getItem('token')!;

    const response = await firstValueFrom(
      this.http.delete(
        `${apiHost}/notes/${id}`,
        {
          headers: headerWithToken(token),
          observe: 'response'
        }
      )
    );

    if (response.ok) {
      this.notes = this.notes.filter((n) => n.id != id);
    }
  }
}
