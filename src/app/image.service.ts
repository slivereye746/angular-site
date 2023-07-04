import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IMAGES } from './images-list';
import { Image } from './image';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor() { }

  getImages(): Observable<Image[]> {
    const images = of(IMAGES);
    return images;
  }

  getImage(id: number): Observable<Image> {
    const image = IMAGES.find(i => i.id === id)!;
    return of(image);
  }
}
