import { Injectable } from '@angular/core';
import { MenuItems } from '../models/menu';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  public data: any;
  public menuItems: MenuItems;

  constructor(private http: HttpClient) {}

  getMenuItems(){
    return this.http.get('/assets/data/data.json');
  }
}


