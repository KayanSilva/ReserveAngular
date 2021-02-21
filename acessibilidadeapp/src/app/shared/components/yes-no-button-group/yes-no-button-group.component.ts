import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-yes-no-button-group',
  templateUrl: './yes-no-button-group.component.html',
  styleUrls: ['./yes-no-button-group.component.scss']
})
export class YesNoButtonGroupComponent implements OnInit {

  @Input() public value = '';
  @Output() public valueChange = new EventEmitter<string>();
  @Input() public label = '';
  public options = YesNoButtonGroupOptions;

  constructor() { }

  ngOnInit(): void {
  }

  activate(value: string): void {
    this.value = value;
    this.valueChange.emit(this.value);
  }


}

enum YesNoButtonGroupOptions {
  YES = 'yes',
  NO = 'no'
}
