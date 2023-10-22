import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { MainComponent } from './main/main.component';
import { InputSectionComponent } from './main/input-section/input-section.component';
import { OutputSectionComponent } from './main/output-section/output-section.component';
@NgModule({
  declarations: [AppComponent, MainComponent, InputSectionComponent, OutputSectionComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
