import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LogoComponent } from './header/logo/logo.component';
import { NavComponent } from './header/nav/nav.component';
import { IconsComponent } from './header/icons/icons.component';
import { ContainerComponent } from './container/container.component';
import { FormComponent } from './form/form.component';
import { ListItemComponent } from './list-item/list-item.component';
import {FormsModule} from "@angular/forms";
import { SearchComponent } from './shared/Component/search/search.component';
import { SortComponent } from './shared/Component/sort/sort.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoComponent,
    NavComponent,
    IconsComponent,
    ContainerComponent,
    FormComponent,
    ListItemComponent,
    SearchComponent,
    SortComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
