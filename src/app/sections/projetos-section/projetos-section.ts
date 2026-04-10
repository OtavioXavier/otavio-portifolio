import { Component, signal } from '@angular/core';
import { ProjectItem } from '../../components/project-item/project-item';
import { RedirectTo } from '../../components/redirect-to/redirect-to';

export interface IProjectItem {
  name: string;
  icon: string;
  link?: string;
  description: string;
  technologies: string[];
}

@Component({
  selector: 'app-projetos-section',
  imports: [ProjectItem, RedirectTo],
  templateUrl: './projetos-section.html',
  styleUrl: './projetos-section.scss',
})
export class ProjetosSection {
  projetos = signal<IProjectItem[]>([
    {
      name: 'Estuda+',
      icon: './projects-thumbnails/estuda-plus.jpg',
      link: 'https://github.com/OtavioXavier/estuda-mais-reboot',
      description:
        'Aplicativo Full-Stack que utiliza a API do Gemini para gerar resumos e questões de qualquer assunto, oferecendo uma interface intuitiva e de fácil uso.',
      technologies: ['Next.js', 'TailwindCSS', 'TypeScript', 'Shadcn/UI', 'Supabase', 'Gemini API'],
    },
    {
      name: 'Node Clean Architecture (TDD)',
      icon: './projects-thumbnails/nodejs-tdd.jpg',
      link: 'https://github.com/OtavioXavier/node-clean-architeture-tdd',
      description:
        'Projeto de aprendizado em Clean Architecture aplicada a Node.js usando Test-Driven Development (TDD).',
      technologies: ['Node.js', 'Express', 'MongoDB', 'Jest', 'JavaScript'],
    },
  ]);
}
