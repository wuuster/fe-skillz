import {Component, OnInit} from '@angular/core';
import { MenuService } from '../../services/menu.service';

@Component ({
  selector: 'app-menu-component',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})

export class MenuComponent implements OnInit {
  public data: any;
  constructor(private menuService: MenuService) {}

  ngOnInit() {
    this.menuService.getMenuItems().subscribe((res) => {
      console.log(res);
      this.data = res;
    });
  }
}
