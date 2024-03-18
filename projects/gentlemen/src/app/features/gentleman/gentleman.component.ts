import { Component, Input } from '@angular/core';

@Component({
  selector: 'isdi-gentleman',
  standalone: true,
  imports: [],
  templateUrl: './gentleman.component.html',
  styleUrl: './gentleman.component.css',
})
export class GentlemanComponent {
  @Input() gentleman: any;
}
