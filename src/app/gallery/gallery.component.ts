import { Component, OnInit } from '@angular/core';
import { formatDistanceToNowStrict } from 'date-fns';
import { IMAGES } from '../images-list';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  images = IMAGES;

  public shuffleArray(array: any[]): any[] {
    let currentIndex = array.length;
    let temporaryValue;
    let randomIndex;
  
    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }

  transformDateToTimeAgo(date: string): string {
    const currentTime = new Date();
    const parsedDate = new Date(date);
    return formatDistanceToNowStrict(parsedDate, { addSuffix: true });
  }
}
