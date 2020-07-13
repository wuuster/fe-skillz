import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  public data: any;
  constructor(private http: HttpClient) {}

  getMenuItems(){
    return this.http.get('/assets/data/data.json');
  }
}


