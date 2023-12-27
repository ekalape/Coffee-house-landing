import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: "menu", loadComponent: () => import('./pages/menu-page/menu-page.component').then(mod => mod.MenuPageComponent) },
  { path: "", loadComponent: () => import('./pages/home-page/home-page.component').then(mod => mod.HomePageComponent) },
];
