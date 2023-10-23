import {
  Component,
  ElementRef,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit, OnChanges, OnDestroy {
  @ViewChild('myRef', { static: true }) myRef: any;
  servers: Server[] = [
    {
      name: 'some server',
      content:
        'asdf sdfdfgh hdfgh gfhosad sdf iudskfh kjdf ghaksdfgh k . fkg jhskgh ',
    },
  ];
  inputNameValue: string = '';
  inputContentValue: string = '';
  constructor() {
    console.log('constructor method called');
  }
  ngOnInit(): void {
    console.log('ngOnInit method called');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges method called', changes);
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy method called');
  }
  addServerHandle() {
    this.servers.push(this.getServerFromInput());
    this.cleaInputs();
    this.getInputRef();
  }
  getServerFromInput() {
    return { name: this.inputNameValue, content: this.inputContentValue };
  }
  cleaInputs() {
    this.inputContentValue = '';
    this.inputNameValue = '';
  }

  getInputRef() {
    console.log(this.myRef.nativeElement.value);
    return this.myRef.nativeElement;
  }

  recieveData(data: any) {
    this.servers = this.servers.filter((server, index) => index !== data);
  }
}

interface Server {
  name: string;
  content: string;
}
