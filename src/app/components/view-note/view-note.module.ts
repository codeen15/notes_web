import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewNoteComponent } from './view-note.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ViewNoteComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [ViewNoteComponent]
})
export class ViewNoteModule { }
