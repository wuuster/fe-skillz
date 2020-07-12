import {Component} from '@angular/core';
import {ListState} from 'src/app/state/list.state';
import {Observable} from 'rxjs';
import {Store, Select} from '@ngxs/store';

@Component({
  selector: 'app-list-input',
  templateUrl: './list-input.component.html',
  styleUrls: ['./list-input.component.scss']
})
export class ListInputComponent {
  public submenuItems: any = [];
  public data: object;
  @Select(ListState.SelectAllItems) listItems: Observable<string[]>;

  constructor(private store: Store) {
    this.listItems.subscribe( (data) => {
      this.getValueFromObservable().then( ( val) => {
        if (!val['ListState']['lastAdded']) { return; }
        this.submenuItems = val;
        this.data = this.submenuItems.ListState.lastAdded[0].child;
      });
    });
  }

  getValueFromObservable() {
    return new Promise(resolve => {
      this.store.subscribe((data: any) => { resolve(data); });
    });
  }
}
