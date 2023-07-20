import { Component, OnInit } from '@angular/core';
import { Note } from 'src/app/interfaces/note.interface';
import { NotesService } from 'src/app/services/notes.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {


  constructor(public noteService: NotesService) {
  }

  searchedNotes: Note[] | null = null;

  searchText: string = '';

  search(data: any) {
    if (data.length == 0) {
      this.searchedNotes = null;
    } else {
      this.searchedNotes = this.noteService.notes.filter((n) => n.title.toLowerCase().includes(this.searchText.toLowerCase()));
    }
  }

}
