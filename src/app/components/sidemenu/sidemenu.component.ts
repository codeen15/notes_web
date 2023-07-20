import { Component } from '@angular/core';
import { NotesService } from 'src/app/services/notes.service';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent {

  isAdding: boolean = false;

  constructor(private noteService: NotesService) { }

  addNote(color: string) {
    this.noteService.addNoteModalColor = color;
    this.noteService.showAddNoteModal = true;
    this.isAdding = false;
  }
}
