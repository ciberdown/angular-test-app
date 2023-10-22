import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-output-section',
  templateUrl: './output-section.component.html',
  styleUrls: ['./output-section.component.scss'],
})
export class OutputSectionComponent {
  @Input() data: any;
}
