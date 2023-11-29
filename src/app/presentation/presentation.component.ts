import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SmoothScroll } from '../core/utils/smooth-scroll.class';
import { ExamplesComponent } from './examples/examples.component';
import { IntroComponent } from './intro/intro.component';
import { ScreenshotsComponent } from './screenshots/screenshots.component';
import { SecurityComponent } from './security/security.component';
import { StatiticsComponent } from './statitics/statitics.component';

@Component({
  selector: 'app-presentation',
  standalone: true,
  imports: [
    CommonModule,
    IntroComponent,
    ScreenshotsComponent,
    StatiticsComponent,
    SecurityComponent,
    ExamplesComponent,
  ],
  templateUrl: './presentation.component.html',
  styleUrls: ['./config.scss', './presentation.component.scss'],
})
export class PresentationComponent {
  constructor() {
    new SmoothScroll(document.documentElement, 100, 12);
  }
}
