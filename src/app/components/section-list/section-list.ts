import { Component, signal, afterNextRender, OnDestroy, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-section-list',
  imports: [],
  templateUrl: './section-list.html',
  styleUrl: './section-list.scss',
})
export class SectionList implements OnDestroy {
  private document = inject(DOCUMENT);
  private hashChangeHandler?: () => void;

  sections = signal<{ id: string; title: string }[]>([
    { id: 'sobre', title: 'Sobre' },
    { id: 'experiencia', title: 'Experiência' },
    { id: 'projetos', title: 'Projetos' },
  ]);

  constructor() {
    afterNextRender(() => {
      const updateActiveSection = () => {
        const hash = window.location.hash.slice(1) || 'sobre';
        this.document.body.setAttribute('data-active-section', hash);
      };

      updateActiveSection();

      this.hashChangeHandler = updateActiveSection;
      window.addEventListener('hashchange', this.hashChangeHandler);

      const container = this.document.querySelector('aside');
      if (container) {
        const handleScroll = () => {
          const sections = this.sections();
          for (const section of sections) {
            const element = this.document.getElementById(section.id);
            if (element) {
              const rect = element.getBoundingClientRect();
              const containerRect = container.getBoundingClientRect();
              
              if (
                rect.top <= containerRect.top + containerRect.height / 2 &&
                rect.bottom >= containerRect.top + containerRect.height / 2
              ) {
                this.document.body.setAttribute('data-active-section', section.id);
                break;
              }
            }
          }
        };

        container.addEventListener('scroll', handleScroll);
        handleScroll();
      }
    });
  }

  ngOnDestroy() {
    if (this.hashChangeHandler) {
      window.removeEventListener('hashchange', this.hashChangeHandler);
    }
    this.document.body.removeAttribute('data-active-section');
  }

  onSectionClick(event: Event, id: string) {
    event.preventDefault();
    const element = this.document.getElementById(id);
    const container = this.document.querySelector('aside');
    
    if (element && container) {
      window.location.hash = id;
      
      const containerRect = container.getBoundingClientRect();
      const elementRect = element.getBoundingClientRect();
      const scrollTop = container.scrollTop;
      const targetScroll = scrollTop + elementRect.top - containerRect.top;
      
      container.scrollTo({
        top: targetScroll,
        behavior: 'smooth',
      });
    }
  }
}
