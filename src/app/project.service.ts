import { Injectable } from '@angular/core';
import { Project } from './project';
import { PROJECTS } from './projects-list';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor() { }

  getProjects(): Observable<Project[]> {
    const projects = of(PROJECTS);
    return projects;
  }

  getProject(id: number): Observable<Project> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const project = PROJECTS.find(p => p.id === id)!;
    return of(project);
  }
}
