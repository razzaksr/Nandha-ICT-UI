import { Component, signal } from '@angular/core';
import { Flash } from "./flash/flash";

@Component({
  selector: 'app-root',
  imports: [Flash],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('explore-ang');
}
