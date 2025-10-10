import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appUpgrade]'
})
export class Upgrade {

  // dependency injection
  constructor(private elm:ElementRef,private rendering:Renderer2){}

  // element [appUpgrade]=""
  @Input('appUpgrade') set appUpgrade(value:string){
    let textColor=''
    value=value.toLowerCase()
    if(value.includes('js'))
      textColor='green'
    else
      textColor='orange'

    this.rendering.setStyle(this.elm.nativeElement,'color',textColor)
  }

}
