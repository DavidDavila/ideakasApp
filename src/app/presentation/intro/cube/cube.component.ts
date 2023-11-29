import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'intro-cube',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cube.component.html',
  styleUrls: ['./cube.component.scss'],
})
export class CubeComponent {
  imgs = [
    'https://global-uploads.webflow.com/639e76b6a0716a69a2134f59/63c9b81ec077ea82329dac01_hero__image-3.webp',
    'https://global-uploads.webflow.com/639e76b6a0716a69a2134f59/63c9b81fc077eaa8f59dac02_hero__image-4.webp',
    'https://global-uploads.webflow.com/639e76b6a0716a69a2134f59/63c9b81d674a937e528ce8e0_hero__image-1.webp',
    'https://global-uploads.webflow.com/639e76b6a0716a69a2134f59/63c9b81dba9943bda6ab969f_hero__image-2.webp',
  ];
}
