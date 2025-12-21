import { Component } from '@angular/core';
import { SectionList } from '../../components/section-list/section-list';
import { ContactList } from '../../components/contact-list/contact-list';
import { SobreSection } from '../sobre-section/sobre-section';
import { ExperienciaSection } from '../experiencia-section/experiencia-section';
import { ProjetosSection } from '../projetos-section/projetos-section';
import { HeaderSection } from '../../components/header-section/header-section';

@Component({
  selector: 'app-home-section',
  imports: [HeaderSection, SectionList, ContactList, SobreSection, ExperienciaSection, ProjetosSection],
  templateUrl: './home-section.html',
  styleUrl: './home-section.scss',
})
export class HomeSection {

}
