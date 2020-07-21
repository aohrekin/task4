import { Injectable } from '@angular/core';
import { Project } from './project';
import { PROJECTS } from './mock-projects';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private messageService: MessageService) { }

  getProjects(): Observable<Project[]> {
  this.messageService.add('ProjectService: fetched projects');
  return of(PROJECTS);
  }
  getProject(id: number): Observable<Project>{
    this.messageService.add(`ProjectService: fetched project id=${id}`);
    return of(PROJECTS.find(project => project.id === id));
  }
}
