import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InfoComponent } from './features/info/info.component';
import { GentlemanComponent } from './features/gentleman/gentleman.component';
import { gentlemen } from './features/gentleman/model/data.gentlemen';

@Component({
  selector: 'isdi-root',
  standalone: true,
  imports: [RouterOutlet, InfoComponent, GentlemanComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  gentlemen = gentlemen;
}
