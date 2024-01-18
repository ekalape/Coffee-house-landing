import { Pipe, PipeTransform } from '@angular/core';
import { MenuItem } from 'app/models/menuItem.model';
import { menuItems } from 'app/utils/menuItems.enum';

@Pipe({
  name: 'menuFilter',
  standalone: true
})
export class GroupsFilterPipe implements PipeTransform {

  constructor() {
  }
  transform(content: MenuItem[] | null, filter: string): MenuItem[] {
    if (!content) return []
    return content.filter(c => c.category === filter) || content
  }
}
