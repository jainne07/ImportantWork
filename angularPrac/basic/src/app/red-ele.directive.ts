import { Directive, ElementRef } from '@angular/core';

@Directive({
    selector: '[appRedEle]'
})
export class RedEleDirective {

    constructor(el: ElementRef) {
        el.nativeElement.style.color = "red"
    }

} 
