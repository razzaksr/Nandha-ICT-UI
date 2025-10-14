import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appMoveup]'
})
export class Moveup implements OnChanges{

  @Input('appMoveup') trigger: any

  constructor(private ef:ElementRef) { }
  ngOnChanges(changes: SimpleChanges): void {
    if(changes['trigger']&&changes['trigger'].currentValue){
      window.scrollTo({top:0,behavior:'smooth'})
    }
  }

}
