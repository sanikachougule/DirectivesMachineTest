import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective implements OnInit {
  @Input() highlight: string="'green'"
  constructor(
    private _eleRef: ElementRef,
    private _renderer: Renderer2
  ) { }
  ngOnInit(): void {
    //this._eleRef.nativeElement.style.padding='20px';
    this._renderer.setStyle(this._eleRef.nativeElement,'backgroundColor', this.highlight);
    this._renderer.setStyle(this._eleRef.nativeElement,'padding', '20px');

  }
  @HostListener('mouseover',['$event'])
  onMouseOver(){
    this._eleRef.nativeElement.style.backgroundColor= 'pink';
  }
  @HostListener('mouseout',['$event'])
  onMouseOut(){
    this._eleRef.nativeElement.style.backgroundColor= this.highlight;
    //this._eleRef.nativeElement.nextSibling.style.backgroundColor= 'green'

  }

}
