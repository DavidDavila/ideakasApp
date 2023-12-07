import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
@Component({
  selector: 'app-screenshots',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './screenshots.component.html',
  styleUrl: './screenshots.component.scss',
})
export class ScreenshotsComponent {
  imgs: string[] = [
    './assets/img/presentation/screenshots/1.png',
    './assets/img/presentation/screenshots/2.png',
    './assets/img/presentation/screenshots/3.png',
    './assets/img/presentation/screenshots/4.png',
    './assets/img/presentation/screenshots/5.png',
  ].reverse();
}
