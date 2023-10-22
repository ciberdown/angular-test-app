import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input-section',
  templateUrl: './input-section.component.html',
  styleUrls: ['./input-section.component.scss'],
})
export class InputSectionComponent {
  @Input() text: any;
  @Input() inputValue: any;
  @Output() inputValueChange = new EventEmitter();

  sendDataToParent() {
    this.inputValueChange.emit(this.inputValue);
  }
}
