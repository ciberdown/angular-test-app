import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { MainComponent } from './main/main.component';
import { InputComponent } from './main/input/input.component';
import { OutputComponent } from './main/output/output.component';
@NgModule({
  declarations: [AppComponent, MainComponent, InputComponent, OutputComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
