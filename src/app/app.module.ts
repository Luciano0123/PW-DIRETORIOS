import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgifComponent } from './ngif/ngif.component';
import { SwitchComponent } from './switch/switch.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { CardComponent } from './card/card.component';
import { FavoritosComponent } from './favoritos/favoritos.component';

@NgModule({
  declarations: [
    AppComponent,
    NgifComponent,
    SwitchComponent,
    NgForComponent,
    CardComponent,
    FavoritosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
