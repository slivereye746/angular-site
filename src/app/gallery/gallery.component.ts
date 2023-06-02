import { Component, OnInit } from '@angular/core';
import { PROJECTS } from '../projects-list';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  projects = PROJECTS;
}
