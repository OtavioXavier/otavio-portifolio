import { Component, input } from '@angular/core';

@Component({
  selector: 'app-header-section',
  imports: [],
  templateUrl: './header-section.html',
  styleUrl: './header-section.scss',
})
export class HeaderSection {
  title = input.required<string>();
  className = input<string>('');
}
