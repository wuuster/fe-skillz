import {Component} from '@angular/core';

@Component ({
  selector: 'app-menu-component',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})

export class MenuComponent {
  constructor(){
    console.log('Menu Item loaded');
  }
}
