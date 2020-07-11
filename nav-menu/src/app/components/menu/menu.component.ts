import {Component, OnInit} from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { MenuItems } from 'src/app/models/menu';

@Component ({
  selector: 'app-menu-component',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  providers: [MenuItems]
})

export class MenuComponent implements OnInit {
  public data: any;
  constructor(private menuService: MenuService, private menuItems: MenuItems) {
    this.data = new MenuItems();
    this.data = [];
  }

  ngOnInit() {
    this.menuService.getMenuItems().subscribe((res) => {
      this.data = res;
    });
  }
}
