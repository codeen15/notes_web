import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidemenuComponent } from './components/sidemenu/sidemenu.component';
import { DashboardModule } from './pages/dashboard/dashboard.module';
import { HttpClientModule } from '@angular/common/http';
import { NoteCardModule } from './components/note-card/note-card.module';

@NgModule({
  declarations: [
    AppComponent,
    SidemenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashboardModule,
    HttpClientModule,
    NoteCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
