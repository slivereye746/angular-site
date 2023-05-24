import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appScrollWithMouse]'
})
export class ScrollWithMouseDirective {

  private isMouseDown = false;
  private startX!: number;
  private scrollX!: number;
  private sensitivity = 1.2; // Độ nhạy, có thể điều chỉnh giá trị này

  constructor(private elementRef: ElementRef) { }

  @HostListener('mousedown', ['$event'])
  onMouseDown(event: MouseEvent) {
    this.isMouseDown = true;
    this.startX = event.pageX - this.elementRef.nativeElement.offsetLeft;
    this.scrollX = this.elementRef.nativeElement.scrollLeft;
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (!this.isMouseDown) {
      return;
    }
    event.preventDefault();
    const x = event.pageX - this.elementRef.nativeElement.offsetLeft;
    const moveX = (x - this.startX) * this.sensitivity; // Tăng độ nhạy ở đây
    this.elementRef.nativeElement.scrollLeft = this.scrollX - moveX;
  }

  @HostListener('mouseup')
  onMouseUp() {
    this.isMouseDown = false;
  }
}
