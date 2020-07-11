import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  public data: any;
  constructor(private http: HttpClient){
    this.data = this.http.get('../assets/data/data.json');
    this.data.subscribe((res) => {
      console.log(res);
    });
  }
  title = 'nav-menu';
}
