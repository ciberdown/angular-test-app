import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss'],
})
export class OutputComponent implements OnDestroy{
  @Input() server: any;
  @Input() index: any;
  @Output() removeBtnClicked = new EventEmitter<any>();

  sendRemoveBtnClickedToParent() {
    this.removeBtnClicked.emit(this.index);
  }
  ngOnDestroy(): void {
    console.log('onDestroy method called in output component')
  }

}
