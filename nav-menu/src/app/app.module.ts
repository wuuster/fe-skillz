import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { MenuItemsComponent } from './utilities/menu-items/menu-items.component';
import { LogoComponent } from './utilities/logo/logo.component';
import { MenuService } from './services/menu.service';
import { ListState } from './state/list.state';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { ListInputComponent } from './components/list-input/list-input.component';


@NgModule({
  declarations: [
    AppComponent, MenuComponent, MenuItemsComponent, LogoComponent, ListInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxsModule.forRoot([ListState]),
    NgxsReduxDevtoolsPluginModule.forRoot()
  ],
  providers: [MenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
