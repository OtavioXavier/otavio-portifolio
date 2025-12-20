import { Component, input } from '@angular/core';

@Component({
  selector: 'app-redirect-to',
  imports: [],
  templateUrl: './redirect-to.html',
  styleUrl: './redirect-to.scss',
})
export class RedirectTo {
  url = input.required<string>();
  text = input.required<string>();
  className = input<string>('');
}

