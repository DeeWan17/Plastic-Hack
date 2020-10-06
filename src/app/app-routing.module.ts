import { PubgCheatComponent } from './pubg-cheat/pubg-cheat.component';
import { Dota2CheatComponent } from './dota2-cheat/dota2-cheat.component';
import { CsgoCheatComponent } from './csgo-cheat/csgo-cheat.component';


import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', component: CsgoCheatComponent }, // csgo is by default
  { path: 'dota2', component: Dota2CheatComponent },
  { path: 'pubg', component: PubgCheatComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
