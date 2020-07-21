import { Component, OnInit } from '@angular/core';
import { Project } from '../project';
//import { PROJECTS } from '../mock-projects';
import { ProjectService } from '../project.service';
//import { MessageService } from '../message.service';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  // projects = PROJECTS
  //selectedProject: Project;
  projects: Project[];
  // constructor() { }
  constructor(private projectService: ProjectService) { }
  // ngOnInit(): void {
  // }

  // onSelect(project: Project): void {
  // this.selectedProject = project;
  // this.messageService.add(`ProjectsComponent: Selected project id=${project.id}`);
  // }
  getProjects(): void {
  // this.projects = this.projectService.getProjects();
  this.projectService.getProjects()
     .subscribe(projects => this.projects = projects);
}
  ngOnInit() {
    this.getProjects();
  }
}
