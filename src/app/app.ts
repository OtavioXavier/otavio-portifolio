import { Component } from '@angular/core';
import { SectionList } from './components/section-list/section-list';
import { ContactList } from './components/contact-list/contact-list';
import { SobreSection } from './sections/sobre-section/sobre-section';
import { ExperienciaSection } from './sections/experiencia-section/experiencia-section';
import { ProjetosSection } from './sections/projetos-section/projetos-section';
import { HeaderSection } from './components/header-section/header-section';

@Component({
  selector: 'app-root',
  imports: [HeaderSection, SectionList, ContactList, SobreSection, ExperienciaSection, ProjetosSection],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

}
