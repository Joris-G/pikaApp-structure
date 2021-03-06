import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-module-title',
  templateUrl: './module-title.component.html',
  styleUrls: ['./module-title.component.scss'],
})
export class ModuleTitleComponent {
  @Input() title: string;
}
