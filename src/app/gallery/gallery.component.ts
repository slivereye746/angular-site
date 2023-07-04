import { Component, OnInit } from '@angular/core';
import { formatDistanceToNowStrict } from 'date-fns';
import { IMAGES } from '../images-list';
import { Image } from '../image';
import { ImageService } from '../image.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  images: Image[] = [];

  constructor(private imageService: ImageService) { }

  ngOnInit(): void {
    this.getImages();
  }

  getImages(): void {
    this.imageService.getImages().subscribe(images => this.images = images);
  }

  transformDateToTimeAgo(date: string): string {
    const currentTime = new Date();
    const parsedDate = new Date(date);
    return formatDistanceToNowStrict(parsedDate, { addSuffix: true });
  }
}
