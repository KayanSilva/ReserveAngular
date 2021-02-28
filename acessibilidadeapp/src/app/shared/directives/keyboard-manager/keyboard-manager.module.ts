import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KeyboardManagerComponent } from './keyboard-manager.component';
import { KeyboardManagerDirective } from './keyboard-manager.directive';
import { KeyboardManagerItemDirective } from './keyboard-manager-item.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [KeyboardManagerDirective, KeyboardManagerItemDirective, KeyboardManagerComponent],
  exports: [KeyboardManagerDirective, KeyboardManagerItemDirective]
})
export class KeyboardManagerModule { }
