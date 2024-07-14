import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor(private elemento: ElementRef) { 
    this.elemento.nativeElement.style.backgroundColor = 'grey'   
  }

}
