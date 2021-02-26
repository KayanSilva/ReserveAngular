import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appKeyboardManager]',
})
export class KeyboardManagerDirective {

  @HostListener('keyup', ['$event'])
  public manageKeys(event: KeyboardEvent): void {
    switch (event.key) {
      case 'ArrowUp':
        break;
      case 'ArrowDown':
        break;
      case 'ArrowLeft':
        break;
      case 'ArrowRight':
        break;
      default:
        break;
    }
  }

  constructor() {}
}
