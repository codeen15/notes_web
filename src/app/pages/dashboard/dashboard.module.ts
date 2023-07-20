import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { NoteCardModule } from 'src/app/components/note-card/note-card.module';
import { AddNoteModule } from 'src/app/components/add-note/add-note.module';
import { UpdateNoteModule } from 'src/app/components/update-note/update-note.module';
import { ViewNoteModule } from 'src/app/components/view-note/view-note.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    NoteCardModule,
    FormsModule,
    AddNoteModule,
    UpdateNoteModule,
    ViewNoteModule
  ],
})
export class DashboardModule { }
