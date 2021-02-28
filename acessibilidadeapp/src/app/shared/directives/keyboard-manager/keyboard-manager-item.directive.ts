import { Directive, ElementRef, Output } from '@angular/core';
import * as EventEmitter from 'events';

@Directive({
  selector: '[appKmItem]'
})
export class KeyboardManagerItemDirective {
  @Output() public focused = new EventEmitter<void>();

  constructor(private elementRef: ElementRef<HTMLElement>) {}

  public focus(): void {
    this.elementRef.nativeElement.focus();
    this.focused.emit();
  }

  public isFocused(): boolean {
    return this.elementRef.nativeElement === document.activeElement;
  }
}
