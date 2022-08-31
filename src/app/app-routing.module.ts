import { Component, NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { AddHeroComponent } from './pages/add-hero/add-hero.component';
import { BattleAppComponent } from './pages/battle-app/battle-app.component';
import { EquipmentMarketComponent } from './pages/equipment-market/equipment-market.component';
import { FightComponent } from './pages/fight/fight.component';
import { HeroDetailsComponent } from './pages/hero-details/hero-details.component';
import { HeroResolver } from './resolvers/hero.resolver';
import {SignupComponent} from './pages/signup/signup.component'
import {AuthService} from './services/auth.service'

const routes: Routes = [
  {
    path: '', component: BattleAppComponent,
    canActivate: [ AuthService ]
  },
  {
    path: 'equipment-store', component: EquipmentMarketComponent,  canActivate: [ AuthService ]
  },
  {
    path: 'about', component: AboutComponent
  },
  {
    path: 'battle/:id', component: FightComponent
  },
  {
    path: 'signup', component: SignupComponent
  },
  {
    path: 'hero/:id',
    component: HeroDetailsComponent,
    resolve: { hero: HeroResolver }
    // resolve: { hero: ContactResolver }, children: [
    //   { path: 'edit/:id', component: EditComponent, resolve: { hero: ContactResolver } },
    // ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
