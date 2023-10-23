import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit, OnChanges, OnDestroy {
  @Input() text: any;
  ngOnInit(): void {
    console.log('ngOnInit method called in input component');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges method called in input component', changes);
  }
  ngOnDestroy(): void {
    console.log('onDestroy method called in input component');
  }
}
