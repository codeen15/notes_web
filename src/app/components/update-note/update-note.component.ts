import { Component } from '@angular/core';
import { Note } from 'src/app/interfaces/note.interface';
import { NotesService } from 'src/app/services/notes.service';

@Component({
  selector: 'app-update-note',
  templateUrl: './update-note.component.html',
  styleUrls: ['./update-note.component.css']
})
export class UpdateNoteComponent {

  id: string | undefined;
  color: string = 'white';
  title: string | undefined;
  content: string | undefined;

  constructor(private noteService: NotesService) {
    const note: Note = this.noteService.updateNoteItem!;
    this.id = note.id;
    this.color = note.color;
    this.title = note.title;
    this.content = note.content;
  }

  updateNote() {
    this.noteService.updateNote(this.id!, this.title!, this.content!);
    this.close();
  }

  close() {
    this.noteService.showUpdateNoteModal = false;
  }
}
