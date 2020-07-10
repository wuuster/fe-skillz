import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { MenuItemsComponent } from './utilities/menu-items/menu-items.component';
import { LogoComponent } from './utilities/logo/logo.component';

@NgModule({
  declarations: [
    AppComponent, MenuComponent, MenuItemsComponent, LogoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
