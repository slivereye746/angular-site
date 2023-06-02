import { Component, OnInit } from '@angular/core';
import { Project } from '../project';
import { PROJECTS } from '../projects-list';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  projects = PROJECTS;
}
