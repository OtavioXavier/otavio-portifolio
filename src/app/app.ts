import { isPlatformBrowser } from '@angular/common';
import { Component, HostListener, inject, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  private readonly platformId = inject(PLATFORM_ID);

  @HostListener('document:mousemove', ['$event'])
  onDocumentMouseMove(event: MouseEvent): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    document.documentElement.style.setProperty('--flashlight-x', `${event.clientX}px`);
    document.documentElement.style.setProperty('--flashlight-y', `${event.clientY}px`);
  }
}
