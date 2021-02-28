import { KeyboardManagerItemDirective } from './keyboard-manager-item.directive';
import {
  ContentChildren,
  Directive,
  HostListener,
  QueryList,
} from '@angular/core';

@Directive({
  selector: '[appKeyboardManager]',
})
export class KeyboardManagerDirective {
  @ContentChildren(KeyboardManagerItemDirective)
  public items: QueryList<KeyboardManagerItemDirective> = new QueryList<KeyboardManagerItemDirective>();

  @HostListener('keyup', ['$event'])
  public manageKeys(event: KeyboardEvent): void {
    switch (event.key) {
      case 'ArrowUp':
        this.moveFocus(ArrowDirection.RIGHT).focus();
        break;
      case 'ArrowDown':
        this.moveFocus(ArrowDirection.LEFT).focus();
        break;
      case 'ArrowLeft':
        this.moveFocus(ArrowDirection.LEFT).focus();
        break;
      case 'ArrowRight':
        this.moveFocus(ArrowDirection.RIGHT).focus();
        break;
      default:
        break;
    }
  }

  constructor() {}

  public moveFocus(direction: ArrowDirection): KeyboardManagerItemDirective {
    const items = this.items.toArray();
    const currentSelectIndex = items.findIndex((item) => item.isFocused());
    const targetElementFocus = items[currentSelectIndex + direction];

    if (targetElementFocus) {
      return targetElementFocus;
    }

    return direction === ArrowDirection.LEFT
      ? items[items.length - 1]
      : items[0];
  }
}

enum ArrowDirection {
  LEFT = -1,
  RIGHT = 1,
}
