import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appNavscroll]'
})
export class NavscrollDirective {

  constructor(public el : ElementRef,public renderer : Renderer2) { }

  @HostListener("window:scroll") scrolling(){
    if(window.scrollY > 50){
      this.renderer.addClass(this.el.nativeElement, "navBack")
    }
    else{
      this.renderer.removeClass(this.el.nativeElement, "navBack")
    }
  }
}
