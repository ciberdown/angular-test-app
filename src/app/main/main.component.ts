import {
  Component,
  ElementRef,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit, OnChanges, OnDestroy {
  servers: Server[] = [
    {
      name: 'some server',
      content:
        'asdf sdfdfgh hdfgh gfhosad sdf iudskfh kjdf ghaksdfgh k . fkg jhskgh ',
    },
  ];
  showWarning: boolean = false;
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
    console.log('ngOnDestroy method called in main');
  }
  addServerHandle() {
    if (this.inputNameValue.length === 0) {
      this.showWarningForSecs();
    } else {
      this.showWarning = false;
      this.servers.push(this.getServerFromInput());
      this.cleaInputs();
    }
  }
  getServerFromInput() {
    return { name: this.inputNameValue, content: this.inputContentValue };
  }
  cleaInputs() {
    this.inputContentValue = '';
    this.inputNameValue = '';
  }

  recieveData(data: any) {
    this.servers = this.servers.filter((server, index) => index !== data);
  }
  showWarningForSecs() {
    this.toggleShowWarning(true);
    setTimeout(() => {
      this.toggleShowWarning(false);
    }, 2000);
  }
  toggleShowWarning(bool: boolean | undefined = undefined) {
    if (bool) {
      this.showWarning = bool;
    } else {
      this.showWarning = !this.showWarning;
    }
  }
}

interface Server {
  name: string;
  content: string;
}
