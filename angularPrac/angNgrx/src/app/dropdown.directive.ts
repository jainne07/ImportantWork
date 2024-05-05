import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {
  @HostBinding('class.show') isOpen = false;
  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    if(this.elRef.nativeElement.contains(event.target)) {
      this.isOpen = !this.isOpen;
      this.elRef.nativeElement.lastChild.classList.toggle('show');
    } else {
      this.isOpen = false;
      this.elRef.nativeElement.lastChild.classList.remove('show');
    }
  }
  constructor(private elRef: ElementRef) {}
}
