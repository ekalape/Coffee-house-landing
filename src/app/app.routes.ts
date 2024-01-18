import { Route, Routes } from '@angular/router';
import { MenuPageComponent } from './pages/menu-page/menu-page.component';

export const menuRoutes: Route[] = [
  { path: 'tea', component: MenuPageComponent },
  { path: 'coffee', component: MenuPageComponent },
  { path: 'dessert', component: MenuPageComponent },
]

export const routes: Routes = [
  {
    path: "menu/:menuOption", loadComponent: () => import('./pages/menu-page/menu-page.component').then(mod => mod.MenuPageComponent),

  },
  {
    path: "menu", loadComponent: () => import('./pages/menu-page/menu-page.component').then(mod => mod.MenuPageComponent), pathMatch: 'full',

  },
  { path: "", loadComponent: () => import('./pages/home-page/home-page.component').then(mod => mod.HomePageComponent) },
];
