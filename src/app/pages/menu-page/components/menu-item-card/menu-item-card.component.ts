import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuItem } from 'app/models/menuItem.model';

@Component({
  selector: 'app-menu-item-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu-item-card.component.html',
  styleUrl: './menu-item-card.component.scss'
})
export class MenuItemCardComponent {

  @Input() item: MenuItem | undefined

  ngOnInit() {
    /*     console.log(this.item?.img); */
  }

}
