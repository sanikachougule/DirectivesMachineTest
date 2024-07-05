import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[navbarDir]'
})
export class NavbarDirective implements OnInit {
 isOpen: boolean = false;
  constructor(
    private _eleRef: ElementRef,
     private _renderer: Renderer2
  ) { }
  ngOnInit(): void {}
@HostListener('click')
toggleBtn(){
  const div : HTMLElement = this._eleRef.nativeElement.nextSibling;
  this.isOpen = !this.isOpen;
  if(this.isOpen){
    this._renderer.addClass(div,'show');
  }else{
    this._renderer.removeClass(div,'show')
  }
}

}
