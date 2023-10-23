import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss'],
})
export class OutputComponent {
  @Input() server: any;
  @Input() index: any;
  @Output() removeBtnClicked = new EventEmitter<any>();

  sendRemoveBtnClickedToParent() {
    this.removeBtnClicked.emit(this.index);
  }

}
