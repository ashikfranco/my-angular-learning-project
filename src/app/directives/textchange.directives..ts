import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appTextChange]'
})
export class TextChangeDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  // Add an element with random number text to the DOM
  @HostListener('click') onClick() {
    const randomNum = Math.floor(Math.random() * 1000); // Generate random number
    const newElement = this.renderer.createElement('span'); // Create a new <span> element
    const text = this.renderer.createText(randomNum.toString()); // Set the text as random number
    
    this.renderer.appendChild(newElement, text); // Add text to <span>
    this.renderer.appendChild(this.el.nativeElement, newElement); // Add <span> to the host element
  }
}