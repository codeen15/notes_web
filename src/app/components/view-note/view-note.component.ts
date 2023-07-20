import { Component } from '@angular/core';
import { Note } from 'src/app/interfaces/note.interface';
import { NotesService } from 'src/app/services/notes.service';

@Component({
  selector: 'app-view-note',
  templateUrl: './view-note.component.html',
  styleUrls: ['./view-note.component.css']
})
export class ViewNoteComponent {
  id: string | undefined;
  color: string = 'white';
  title: string | undefined;
  content: string | undefined;

  constructor(private noteService: NotesService) {
    const note: Note = this.noteService.viewNoteItem!;
    this.id = note.id;
    this.color = note.color;
    this.title = note.title;
    this.content = note.content;
  }

  close() {
    this.noteService.showViewNoteModal = false;
  }
}
