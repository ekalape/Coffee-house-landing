import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router, RouterModule } from '@angular/router';
import { MenuItem } from 'app/models/menuItem.model';
import { menuItems } from 'app/utils/menuItems.enum';
import { Observable } from 'rxjs';
import { MenuService } from './services/menu.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu-page',
  templateUrl: './menu-page.component.html',
  styleUrls: ['./menu-page.component.scss'],
  standalone: true,
  imports: [RouterModule, CommonModule],
  providers: [MenuService]
})
export class MenuPageComponent implements OnInit {

  allMenuContent: Observable<MenuItem[]> | undefined;

  contentFilter: menuItems = menuItems.COFFEE;

  menuItems = menuItems

  constructor(private router: Router, private menuService: MenuService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.allMenuContent = this.menuService.getMenuContent()
    this.route.params.subscribe(params => {
      const item = params['menuOption'];

      this.contentFilter = item || menuItems.COFFEE;
      this.router.navigate([`/menu/${this.contentFilter.toLowerCase()}`])
    });
  }



  switchContent(option: menuItems) {
    this.router.navigate([`/menu/${option.toLowerCase()}`])
    this.contentFilter = option

  }

}
