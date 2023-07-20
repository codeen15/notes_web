import { Component, Input } from '@angular/core';
import { Note } from 'src/app/interfaces/note.interface';
import { NotesService } from 'src/app/services/notes.service';

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.css']
})
export class NoteCardComponent {

  @Input() note: Note | undefined;

  constructor(private noteService: NotesService) { }

  view() {
    this.noteService.viewNoteItem = this.note;
    this.noteService.showViewNoteModal = true;
  }

  update() {
    this.noteService.updateNoteItem = this.note;
    this.noteService.showUpdateNoteModal = true;
  }

  delete() {
    this.noteService.deleteNote(this.note!.id);
  }
}
