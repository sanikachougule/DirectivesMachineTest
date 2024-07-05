import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appToLowerCase]'
})
export class ToLowerCaseDirective implements OnInit{
 
  constructor(
    private _eleRef: ElementRef,
    private _renderer: Renderer2
  ) { }
  ngOnInit(): void {}
  @HostListener('input',['$event'])
  onLowerCase(eve:Event){
      let inputControl= eve.target as HTMLInputElement;
      let val = inputControl.value;
      console.log(val)
      inputControl.value = val.toLocaleLowerCase()
      console.log(val)
  }
  
}
