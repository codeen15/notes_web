import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { NotesService } from 'src/app/services/notes.service';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent {

  isAdding: boolean = false;

  constructor(private route: Router, private noteService: NotesService, private authService: AuthService) { }

  addNote(color: string) {
    this.noteService.addNoteModalColor = color;
    this.noteService.showAddNoteModal = true;
    this.isAdding = false;
  }

  logout() {
    this.authService.logout();
    this.route.navigateByUrl('login');
  }
}
