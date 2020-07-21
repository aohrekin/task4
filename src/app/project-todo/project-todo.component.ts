import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Project }         from '../project';
import { ProjectService }  from '../project.service';

@Component({
  selector: 'app-project-todo',
  templateUrl: './project-todo.component.html',
  styleUrls: [ './project-todo.component.css' ]
})
export class ProjectTodoComponent implements OnInit {
  project: Project;

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getProject();
  }

  getProject(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.projectService.getProject(id)
      .subscribe(project => this.project = project);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
  this.projectService.updateProject(this.project)
    .subscribe(() => this.goBack());
  }
}
