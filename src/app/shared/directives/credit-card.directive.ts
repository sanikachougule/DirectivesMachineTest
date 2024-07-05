import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCreditCard]'
})
export class CreditCardDirective implements OnInit{
   errorContainer !: HTMLParagraphElement;
  constructor(
    private _eleRef: ElementRef,
    private _renderer: Renderer2
  ) { }
  ngOnInit(): void {}
    @HostListener('input',['$event'])
    validateCreditcard(eve: Event){
      let inputControl = eve.target as HTMLInputElement;
      let val = inputControl.value.replace(/\s+/g,'') as string;

    if(val.length > 16){
      val= val.substring(0,16);
    }  
   if(/[^\d]/.test(val)){
    alert("please enter valid details");
    this.errorContainer=document.createElement('p');
    this.errorContainer.innerHTML= 'please enter details';
    this.errorContainer.className= 'alert alert-danger';
    inputControl.parentNode?.append(this.errorContainer);
   }
   //else{
   //  this.errorContainer.innerHTML= ' ';
    // this.errorContainer.className=' ';
   //}
     val= this.formtCreditCardValue(val);
     console.log(val);
     inputControl.value= val;
    }

    formtCreditCardValue(val: string){
      let chunkArr = [];
      for(let i = 0; i< val.length; i+=4){
        chunkArr.push(val.slice(i,i+4))
      }
      return chunkArr.join(' ')
    }
}

