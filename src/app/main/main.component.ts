import { Component } from '@angular/core';
interface Server {
  type: 'name' | 'content';
  text: string;
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  servers: Server[] = [];
  sNameInputValue: string = '';
  sContentInputValue: string = '';

  addNameServer() {
    const obj: Server = {
      text: this.sNameInputValue,
      type: 'name',
    };
    this.servers.push(obj);
    this.sNameInputValue = '';
    console.log(this.servers);
    return obj;
  }
  addContentServer() {
    const obj: Server = {
      text: this.sContentInputValue,
      type: 'content',
    };
    this.servers.push(obj);
    this.sContentInputValue = '';
    return obj;
  }


}
