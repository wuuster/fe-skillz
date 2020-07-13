import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';
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
  public isMobile: boolean;
  public data: any;
  private toggle: boolean;
  public status;
  constructor(private menuService: MenuService, private menuItems: MenuItems) {
    this.data = new MenuItems();
    this.data = [];
    if (window.innerWidth <= 768) { this.isMobile = true; }
    this.toggle = false;
  }

  ngOnInit() {
    this.menuService.getMenuItems().subscribe((res) => {
      this.data = res;
    });
  }

  getPosition(e){
    const el = this.list.nativeElement;
    const posx = e.target.getBoundingClientRect().x + 'px';
    el.style.display = 'block';
    el.style.left = posx;
  }

  hide() { this.list.nativeElement.style.display = 'none'; }
  show() { this.list.nativeElement.style.display = 'block'; }

  getMobilePosition(e) {
    e.target.append(document.getElementById('mobile-list'));
  }

  tog(e) {
    const group = document.querySelectorAll('.wonderful');
    if (e.target.classList.contains('wonderful')) {
      e.target.classList.remove('wonderful'); this.hide();
    } else {
      if (group) { [].forEach.call(group, (el) => { el.classList.remove('wonderful'); }); }
      e.target.classList.add('wonderful'); this.show();
    }
  }

  expand(e) {
    this.holder.nativeElement.classList.toggle('hide');
    e.target.classList.toggle('rot');
  }
}
