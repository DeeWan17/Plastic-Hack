import { CheatService } from './cheat.service';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContentCheatComponent } from './content-cheat/content-cheat.component';
import { CheatComponent } from './cheat/cheat.component';
import { CsgoCheatComponent } from './csgo-cheat/csgo-cheat.component';
import { Dota2CheatComponent } from './dota2-cheat/dota2-cheat.component';
import { PubgCheatComponent } from './pubg-cheat/pubg-cheat.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    NavbarComponent,
    ContentCheatComponent,
    CheatComponent,
    CsgoCheatComponent,
    Dota2CheatComponent,
    PubgCheatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [CheatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
