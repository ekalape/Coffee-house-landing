import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router, RouterModule } from '@angular/router';
import { MenuItem } from 'app/models/menuItem.model';
import { menuItems } from 'app/utils/menuItems.enum';
import { Observable, take } from 'rxjs';
import { MenuService } from './services/menu.service';
import { CommonModule } from '@angular/common';
import { MenuItemCardComponent } from './components/menu-item-card/menu-item-card.component';
import { GroupsFilterPipe } from './pipes/filterContent.pipe';
import { ItemDetailsComponent } from './components/item-details/item-details.component';


@Component({
  selector: 'app-menu-page',
  templateUrl: './menu-page.component.html',
  styleUrls: ['./menu-page.component.scss'],
  standalone: true,
  imports: [RouterModule, CommonModule,
    MenuItemCardComponent, GroupsFilterPipe,
    ItemDetailsComponent
  ],
  providers: [MenuService]
})
export class MenuPageComponent implements OnInit {

  allMenuContent: Observable<MenuItem[]> | undefined;

  contentFilter: menuItems = menuItems.COFFEE;

  menuItems = menuItems
  opened = false;

  selected: MenuItem | undefined;

  /*   tempItem: MenuItem | undefined */

  constructor(private router: Router, private menuService: MenuService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.allMenuContent = this.menuService.getMenuContent()
    this.route.params.subscribe(params => {
      const item = params['menuOption'];

      this.contentFilter = item || menuItems.COFFEE;
      this.router.navigate([`/menu/${this.contentFilter.toLowerCase()}`])
    });

    /*  this.allMenuContent.pipe(take(1)).subscribe(it => this.tempItem = it[0]) */
  }



  switchContent(option: menuItems) {
    this.router.navigate([`/menu/${option.toLowerCase()}`])
    this.contentFilter = option

  }

  openDetails(x: MenuItem | undefined) {
    this.opened = !this.opened;
    this.selected = x;
    console.log('opened :>> ', this.opened);
    console.log('selected :>> ', this.selected);
  }

}
