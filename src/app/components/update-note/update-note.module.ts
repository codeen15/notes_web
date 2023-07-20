import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateNoteComponent } from './update-note.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    UpdateNoteComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [UpdateNoteComponent]
})
export class UpdateNoteModule { }
