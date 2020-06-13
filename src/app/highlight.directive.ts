import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private elem:ElementRef) { }

  @HostListener("click") onClicks(){
    this.textDeco("highlight-highest")
  }

  @HostListener("dbclick") onDoubleClick(){
    this.textDeco("Marion")
  }
  private textDeco(action:string) {
    this.elem.nativeElement.style.color='highlight-highest;'
   }

}
