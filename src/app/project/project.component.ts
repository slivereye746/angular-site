import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../project';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { ProjectService } from '../project.service';


@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  project: Project | undefined;
  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getProject();
  }

  getProject(): void{
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.projectService.getProject(id).subscribe(project => this.project = project)
  }

  goBack(): void {
    this.location.back();
  }

}
