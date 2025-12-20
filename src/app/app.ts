import { Component } from '@angular/core';
import { SectionList } from './components/section-list/section-list';
import { ContactList } from './components/contact-list/contact-list';
import { SobreSection } from './sections/sobre-section/sobre-section';

@Component({
  selector: 'app-root',
  imports: [SectionList, ContactList, SobreSection],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

}
