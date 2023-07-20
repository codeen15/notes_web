import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoteCardComponent } from './note-card.component';



@NgModule({
  declarations: [NoteCardComponent],
  imports: [
    CommonModule
  ],
  exports: [NoteCardComponent]
})
export class NoteCardModule { }
