import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  servers: Server[] = [{name:'some server',content:'asdf sdfdfgh hdfgh gfhosad sdf iudskfh kjdf ghaksdfgh k . fkg jhskgh '}];
  inputNameValue: string = '';
  inputContentValue: string = '';

  addServerHandle() {
    this.servers.push(this.getServerFromInput());
    this.cleaInputs();
  }
  getServerFromInput() {
    return { name: this.inputNameValue, content: this.inputContentValue };
  }
  cleaInputs() {
    this.inputContentValue = '';
    this.inputNameValue = '';
  }
}

interface Server {
  name: string;
  content: string;
}
