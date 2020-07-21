import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectTodoComponent } from './project-todo/project-todo.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from "./app-routing.module";
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProjectSearchComponent } from './project-search/project-search.component';
@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    ProjectTodoComponent,
    MessagesComponent,
    DashboardComponent,
    ProjectSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
