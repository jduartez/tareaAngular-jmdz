import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appFontsize]'
})
export class FontsizeDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) { 
    this.renderer.setStyle(this.el.nativeElement, 'fontSize', '20px');
  }

}
