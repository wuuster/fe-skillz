import { State, Selector, Action, StateContext } from '@ngxs/store';
import { AddListItem } from 'src/app/actions/list.actions';

export interface ListStateModel {
  list: string[];
  lastAdded: string;
}

@State<ListStateModel>({
  name: 'ListState',
  defaults: {
    list: [],
    lastAdded: null
  }
})

export class ListState {
  @Selector() static SelectAllItems(state: ListStateModel): string[] {
    return state.list;
  }

  @Action(AddListItem)
  addListItem(
    { getState, setState }: StateContext<ListStateModel>,
    { payload }: AddListItem
  ) {
    const state = getState();
    setState({
      list: [...state.list, payload],
      lastAdded: payload
    });
  }
}
