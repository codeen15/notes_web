import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddNoteComponent } from './add-note.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AddNoteComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [AddNoteComponent]
})
export class AddNoteModule { }
