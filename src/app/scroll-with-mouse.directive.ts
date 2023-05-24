import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appScrollWithMouse]'
})
export class ScrollWithMouseDirective {

  @HostListener('wheel', ['$event'])
  onWheel(event: WheelEvent) {
    event.preventDefault();
    const element = event.target as HTMLElement;
    const delta = Math.max(-1, Math.min(1, -event.deltaY));
    element.scrollLeft -= (delta * 40);
  }
}
