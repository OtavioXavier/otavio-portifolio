import { Component, input } from '@angular/core';
import { Experiencia } from '../../sections/experiencia-section/experiencia-section';
import { TecnologiaBadge } from '../tecnologia-badge/tecnologia-badge';

@Component({
  selector: 'app-experience-item',
  imports: [TecnologiaBadge],
  templateUrl: './experience-item.html',
  styleUrl: './experience-item.scss',
})
export class ExperienceItem {
  experiencia = input.required<Experiencia>();
}
