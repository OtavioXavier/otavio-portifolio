import { Component, signal } from '@angular/core';
import { ExperienceItem } from '../../components/experience-item/experience-item';
import { RedirectTo } from '../../components/redirect-to/redirect-to';

export type Experiencia = {
  name: string;
  icon: string;
  link?: string;
  description: string;
  period: string;
  technologies: string[];
};

@Component({
  selector: 'app-experiencia-section',
  imports: [ExperienceItem, RedirectTo],
  templateUrl: './experiencia-section.html',
  styleUrl: './experiencia-section.scss',
})
export class ExperienciaSection {
  experiencias = signal<Experiencia[]>([
    {
      name: 'Eng. Software Júnior - Waypass',
      icon: './experience-logos/waypass.svg',
      link: 'https://waypass.com.br',
      description:
        'Desenvolvo aplicações SPA para sistema de gestão de trânsito, com foco em arquitetura escalável, performance e UI/UX. Responsável por implementar arquitetura baseada em classes abstratas para padronizar CRUDs, componentes reutilizáveis seguindo DRY e SOLID, e otimizações de performance.',
      period: 'out 2025  - Atualmente',
      technologies: ['Angular', 'Typescript', 'Dotnet', 'Bootstrap', 'SASS'],
    },
    {
      name: 'Estagiário - AVSI',
      icon: './experience-logos/avsi.svg',
      link: 'https://www.avsibrasil.org.br/',
      description:
        'Idealizador e realizador da modernização dos formulários da empresa, para o formato virtual, impactando positivamente a cadeia de produção, a nível nacional. Durante o dia a dia atuava como professor em oficinas relacionadas a eletricidade e arduino uno.',
      period: '2024 - 2026',
      technologies: ['Microsoft', 'Python', 'Arduino'],
    },
    {
      name: 'Pesquisador - FAPESB',
      icon: './experience-logos/fapesb.svg',
      link: 'https://www.fapesb.ba.gov.br/',
      description:
        'Desenvolvimento de uma solução 3D interativa para o mapeamento da cidade de Madre de Deus, com foco em aplicações de cidade inteligente. \nResponsável pela criação das interfaces e experiência do usuário para sites internos do projeto, focando em usabilidade e acessibilidade, tudo alinhando as necessidades do projeto com boas práticas de UI/UX.',
      period: 'out 2023 - mar 2024',
      technologies: ['Javascript', 'Three.js', 'Postgres', 'Java', 'Next.js'],
    },
  ]);

}
