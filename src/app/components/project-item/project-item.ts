import { Component, input } from '@angular/core';
import { IProjectItem } from '../../sections/projetos-section/projetos-section';
import { TecnologiaBadge } from '../tecnologia-badge/tecnologia-badge';

@Component({
  selector: 'app-project-item',
  imports: [TecnologiaBadge],
  templateUrl: './project-item.html',
  styleUrl: './project-item.scss',
})
export class ProjectItem {
  projeto = input.required<IProjectItem>();

}
