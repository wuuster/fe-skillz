import {AddListItem} from 'src/app/actions/list.actions';
import {Component, Input} from '@angular/core';
import {ListState} from 'src/app/state/list.state';
import {Observable} from 'rxjs';
import {Store, Select} from '@ngxs/store';

@Component({
  selector: 'app-menu-items',
  templateUrl: './menu-items.component.html',
  styleUrls: ['./menu-items.component.scss']
})

export class MenuItemsComponent {
  @Input() data: string[];
  public isMobile: boolean;
  public submenuItems: object;
  @Select(ListState.SelectAllItems) listItems: Observable<string[]>;
  constructor(private store: Store) {
    if (window.innerWidth <= 768) { this.isMobile = true; }
  }

  expandMenu(item) {
    // ADD TO THE STORE
    this.store.dispatch(new AddListItem(item));
  }

}


