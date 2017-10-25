import { Directive, ElementRef, HostListener, Input} from '@angular/core';



// import vanila tilt library

const VanillaTilt = ('vanilla-tilt');
@Directive({
  selector: '[data-tilt]'
})
export class DataTiltDirective {

  constructor(private element: ElementRef) { 
console.log(element.nativeElement);
/*
VanillaTilt.init(element.nativeElement, {
        max: 25,
        speed: 400
      });

*/
  }

}
