import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstWordPipe } from '../pipes/first-word.pipe';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, FirstWordPipe, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  titles: string[] = ["Favorite coffee", "About", "Mobile app", "Contact us"]
  selectedTitle: string = "Favorite coffee"

  selectHeaderMenuTitle(title: string) {
    this.selectedTitle = title;
  }

}
