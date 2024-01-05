import { Component, HostBinding } from '@angular/core';
import { CommonModule, ViewportScroller } from '@angular/common';
import { FirstWordPipe } from '../pipes/first-word.pipe';
import { RouterModule } from '@angular/router';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, FirstWordPipe, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  animations: [
    trigger('drawerAnimation', [
      state('close', style({
        right: '-100%'
      })),
      state('open', style({
        right: '0px'
      })),
      transition('close=>open', [
        animate('500ms ease-out', style({
          right: '0px'
        }))
      ]),
      transition('open=>close', [
        animate('500ms ease-out', style({
          right: '-100%'
        }))
      ]),
    ])
  ]
})
export class HeaderComponent {

  opened = false;

  titles: string[] = ["Favorite coffee", "About", "Mobile app", "Contact us"]
  selectedTitle: string = "Favorite coffee"


  constructor(private viewportScroller: ViewportScroller) { }

  scrollToComponent(componentId: string, title: string): void {
    const element = document.getElementById(componentId);

    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    this.selectHeaderMenuTitle(title)
    if (this.opened) this.opened = false;
  }

  selectHeaderMenuTitle(title: string) {
    this.selectedTitle = title;
  }

  openCloseDrawer() {
    this.opened = !this.opened
  }

}
