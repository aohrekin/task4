import { Injectable } from '@angular/core';
import { Project } from './project';
import { PROJECTS } from './mock-projects';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
  constructor(private http: HttpClient,
    private messageService: MessageService) { }

    private log(message: string) {
    this.messageService.add(`ProjectService: ${message}`);
  }
  private projectsUrl = 'api/projects';  // URL to web api

  getProjects(): Observable<Project[]> {
  //this.messageService.add('ProjectService: fetched projects');
  return this.http.get<Project[]>(this.projectsUrl)
    .pipe(
      tap(_ => this.log('fetched projects')),
      catchError(this.handleError<Project[]>('getProjects', []))
    );
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }


  getProject(id: number): Observable<Project>{
    const url = `${this.projectsUrl}/${id}`;
    return this.http.get<Project>(url).pipe(
      tap(_ => this.log(`fetched project id=${id}`)),
      catchError(this.handleError<Project>(`getProject id=${id}`))
  );
}

updateProject(project: Project): Observable<any> {
  return this.http.put(this.projectsUrl, project, this.httpOptions).pipe(
    tap(_ => this.log(`updated project id=${project.id}`)),
    catchError(this.handleError<any>('updateProject'))
  );
  }
  addProject(project: Project): Observable<Project> {
  return this.http.post<Project>(this.projectsUrl, project, this.httpOptions).pipe(
    tap((newProject: Project) => this.log(`added project w/ id=${newProject.id}`)),
    catchError(this.handleError<Project>('addProject'))
  );
}
searchProjects(term: string): Observable<Project[]> {
  if (!term.trim()) {
    return of([]);
  }
  return this.http.get<Project[]>(`${this.projectsUrl}/?title=${term}`).pipe(
    tap(x => x.length ?
       this.log(`found projects matching "${term}"`) :
       this.log(`no projects matching "${term}"`)),
    catchError(this.handleError<Project[]>('searchProjects', []))
  );
}
}
