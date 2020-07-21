import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Project } from './project';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const projects = [
      { id: 11, title: 'Job' },
      { id: 12, title: 'Study' },
      { id: 13, title: 'Other' },
      { id: 14, title: 'Home' },
      { id: 15, title: 'Magneta' }
    ];
    return {projects};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(projects: Project[]): number {
    return projects.length > 0 ? Math.max(...projects.map(project => project.id)) + 1 : 11;
  }
}
