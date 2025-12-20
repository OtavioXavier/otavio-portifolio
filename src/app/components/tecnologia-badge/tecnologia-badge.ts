import { Component, input } from '@angular/core';

@Component({
  selector: 'app-tecnologia-badge',
  imports: [],
  templateUrl: './tecnologia-badge.html',
  styleUrl: './tecnologia-badge.scss',
})
export class TecnologiaBadge {
  tecnologia = input.required<string>();

}
