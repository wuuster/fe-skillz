import {AddListItem} from 'src/app/actions/list.actions';
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
  public submenuItems: object;
  public stamp;
  @Select(ListState.SelectAllItems) listItems: Observable<string[]>;
  constructor(private store: Store) {}

  newItem(item) {
    // ADD TO THE STORE
    this.store.dispatch(new AddListItem(item));

    // RETRIEVE FROM THE STORE
    this.getValueFromObservable().then((data: any) => {
      this.submenuItems = data;
    });

    // TODO: REMOVE THIS TIMESTAMP TEST
    this.stamp = Date.now();
  }

  getValueFromObservable() {
    return new Promise(resolve => {
      this.store
        .subscribe(
          (data: any) => {
            resolve(data);
          });
      });
  }
}
