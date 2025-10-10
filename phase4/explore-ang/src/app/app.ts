import { Component, signal } from '@angular/core';
import { Flash } from "./flash/flash";
import { Dashboard } from './dashboard/dashboard';

@Component({
  selector: 'app-root',
  imports: [Flash,Dashboard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('explore-ang');
}
