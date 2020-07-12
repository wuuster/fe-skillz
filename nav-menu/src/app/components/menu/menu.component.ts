import {Component, OnInit, ViewChild, ElementRef, Renderer2} from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { MenuItems } from 'src/app/models/menu';

@Component ({
  selector: 'app-menu-component',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  providers: [MenuItems]
})

export class MenuComponent implements OnInit {
  @ViewChild ('list') list: ElementRef;
  @ViewChild ('holder') holder: ElementRef;
  public data: any;
  constructor(private menuService: MenuService, private menuItems: MenuItems, private renderer: Renderer2) {
    this.data = new MenuItems();
    this.data = [];
  }

  ngOnInit() {
    this.menuService.getMenuItems().subscribe((res) => {
      this.data = res;
    });
  }

  getPosition(e){
    this.list.nativeElement.style.display = 'block';
    const posx = e.target.getBoundingClientRect().x + 'px';
    this.list.nativeElement.style.left = posx;
  }

  hide() { this.list.nativeElement.style.display = 'none'; }
  show() { this.list.nativeElement.style.display = 'block'; }
}
