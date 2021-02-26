import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KeyboardManagerComponent } from './keyboard-manager.component';
import { KeyboardManagerDirective } from './keyboard-manager.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [KeyboardManagerDirective, KeyboardManagerComponent],
  exports: [KeyboardManagerDirective]
})
export class KeyboardManagerModule { }
