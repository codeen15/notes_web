import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Note } from '../interfaces/note.interface';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  // Add
  showAddNoteModal: boolean = false;
  addNoteModalColor: string = 'white';

  // Update
  updateNoteItem: Note | undefined;
  showUpdateNoteModal: boolean = false;

  // View
  viewNoteItem: Note | undefined;
  showViewNoteModal: boolean = false;

  notes: Note[] = [];

  constructor(private http: HttpClient) {
    this.getNotes();
  }

  async getNotes(): Promise<void> {
    const data: Note[] = [];

    data.sort((a, b) => {
      if (a.created_at < b.created_at) return 1;
      else return 0;
    });

    this.notes = data;

  }

  async addNote(title: string, content: string, color: string): Promise<void> {

    this.notes.unshift({
      id: new Date().toISOString(),
      title: title,
      content: content,
      created_at: new Date(),
      color: color,
    });
  }

  async updateNote(id: string, title: string, content: string): Promise<void> {
    const note = this.notes.find((n) => n.id == id);

    if (note) {
      note.title = title;
      note.content = content;
    }
  }

  async deleteNote(id: string): Promise<void> {
    this.notes = this.notes.filter((n) => n.id != id);
  }
}
