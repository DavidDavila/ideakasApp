import { CommonModule } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import { CubeComponent } from './cube/cube.component';

@Component({
  selector: 'app-intro',
  standalone: true,
  imports: [CommonModule, CubeComponent],
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.scss',
})
export class IntroComponent implements AfterViewInit {
  constructor() {}
  ngAfterViewInit(): void {
    (window as any)['skrollr'].init();
  }
}
