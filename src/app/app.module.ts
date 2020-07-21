import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectTodoComponent } from './project-todo/project-todo.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from "./app-routing.module";
import { DashboardComponent } from './dashboard/dashboard.component';
@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    ProjectTodoComponent,
    MessagesComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
