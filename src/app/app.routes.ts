import { Routes } from '@angular/router';
import { CurriculoSection } from './sections/curriculo-section/curriculo-section';
import { HomeSection } from './sections/home-section/home-section';

export const routes: Routes = [
  {
    path: '',
    component: HomeSection
  },
  {
    path: 'curriculo',
    component: CurriculoSection
  }
];
