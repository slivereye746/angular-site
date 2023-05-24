import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  groups = [
    { items: ['Item 1', 'Item 2', 'Item 3', 'Item 4'] },
    { items: ['Item 5', 'Item 6', 'Item 7', 'Item 8'] },
    { items: ['Item 9', 'Item 10', 'Item 11', 'Item 12'] }
  ];
  activeGroup = this.groups[0];

  @ViewChild('scrollContainer') scrollContainerRef!: ElementRef;

  scrollToGroup(index: number) {
    const scrollContainer = this.scrollContainerRef.nativeElement;
    const groupWidth = scrollContainer.offsetWidth;
    scrollContainer.scrollLeft = index * groupWidth;
  }

  updateActiveGroup() {
    const scrollContainer = this.scrollContainerRef.nativeElement;
    const scrollLeft = scrollContainer.scrollLeft;
    const groupWidth = scrollContainer.offsetWidth;
    const activeIndex = Math.floor(scrollLeft / groupWidth);
    this.activeGroup = this.groups[activeIndex];
  }
  constructor() { }

  ngOnInit(): void {
  }

}
