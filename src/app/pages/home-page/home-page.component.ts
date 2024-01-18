import { Component, OnInit } from '@angular/core';
import { AboutSectionComponent } from './components/about-section/about-section.component';
import { ChooseFavComponent } from './components/choose-fav/choose-fav.component';
import { DlAppSectionComponent } from './components/dl-app-section/dl-app-section.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';

@Component({
  selector: 'app-home-page',
  imports: [HeroSectionComponent, ChooseFavComponent, AboutSectionComponent, DlAppSectionComponent],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  standalone: true
})
export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
