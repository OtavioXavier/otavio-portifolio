import { Component, signal, afterNextRender, OnDestroy, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-mobile-header',
  imports: [],
  templateUrl: './mobile-header.html',
  styleUrl: './mobile-header.scss',
})
export class MobileHeader implements OnDestroy {
  private document = inject(DOCUMENT);
  private scrollHandler?: () => void;
  private resizeHandler?: () => void;

  activeSection = signal<string>('sobre');

  sections = signal<{ id: string; title: string }[]>([
    { id: 'sobre', title: 'Sobre' },
    { id: 'experiencia', title: 'Experiência' },
    { id: 'projetos', title: 'Projetos' },
  ]);

  constructor() {
    afterNextRender(() => {
      const updateActiveSection = () => {
        const hash = window.location.hash.slice(1) || 'sobre';
        this.activeSection.set(hash);
      };

      updateActiveSection();

      window.addEventListener('hashchange', updateActiveSection);

      const handleScroll = () => {
        const sections = this.sections();
        const isMobile = window.innerWidth < 1024;
        
        if (!isMobile) return;

        let activeId = 'sobre';
        let maxVisible = 0;

        for (const section of sections) {
          const element = this.document.getElementById(section.id);
          if (element) {
            const rect = element.getBoundingClientRect();
            const viewportTop = 0;
            const viewportBottom = window.innerHeight;
            
            // Calcular quanto da seção está visível
            const visibleTop = Math.max(rect.top, viewportTop);
            const visibleBottom = Math.min(rect.bottom, viewportBottom);
            const visibleHeight = Math.max(0, visibleBottom - visibleTop);
            
            // Se a seção está visível e tem mais área visível que a anterior
            if (visibleHeight > maxVisible && rect.top < viewportBottom) {
              maxVisible = visibleHeight;
              activeId = section.id;
            }
          }
        }

        this.activeSection.set(activeId);
      };

      this.scrollHandler = handleScroll;
      this.resizeHandler = () => {
        if (window.innerWidth < 1024) {
          handleScroll();
        }
      };

      window.addEventListener('scroll', this.scrollHandler);
      window.addEventListener('resize', this.resizeHandler);
      handleScroll();
    });
  }

  ngOnDestroy() {
    if (this.scrollHandler) {
      window.removeEventListener('scroll', this.scrollHandler);
    }
    if (this.resizeHandler) {
      window.removeEventListener('resize', this.resizeHandler);
    }
  }

  getCurrentTitle(): string {
    const section = this.sections().find(s => s.id === this.activeSection());
    return section?.title || 'Sobre';
  }
}

