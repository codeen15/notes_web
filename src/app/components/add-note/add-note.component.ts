import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Note } from 'src/app/interfaces/note.interface';
import { NotesService } from 'src/app/services/notes.service';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent {

  color: string = 'white';

  title: string | undefined;
  content: string | undefined;

  constructor(private noteService: NotesService) {
    this.color = this.noteService.addNoteModalColor;
  }

  addNote() {
    this.noteService.addNote(this.title!, this.content!, this.color);
    this.close();
  }

  close() {
    this.noteService.showAddNoteModal = false;
  }

}
