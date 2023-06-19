import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-scroll-top',
  templateUrl: './scroll-top.component.html',
  styleUrls: ['./scroll-top.component.css']
})
export class ScrollTopComponent implements OnInit {
  showButton = false;
  constructor() { }
  @HostListener('window:scroll')
  onWindowScroll() {
    const scrollPosition = window.scrollY  || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.showButton = scrollPosition > 300;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  ngOnInit(): void {
  }

}
