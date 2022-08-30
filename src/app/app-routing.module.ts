import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { AddHeroComponent } from './pages/add-hero/add-hero.component';
import { BattleAppComponent } from './pages/battle-app/battle-app.component';
import { EquipmentMarketComponent } from './pages/equipment-market/equipment-market.component';
import { FightComponent } from './pages/fight/fight.component';
import { HeroDetailsComponent } from './pages/hero-details/hero-details.component';
import { HeroResolver } from './resolvers/hero.resolver';

const routes: Routes = [
  {
    path: '', component: BattleAppComponent
    // , children: [
    //   { path: 'add', component: AddHeroComponent }
    // ]
  },
  {
    path: 'equipment-store', component: EquipmentMarketComponent
  },
  {
    path: 'about', component: AboutComponent
  },
  {
    path: 'battle/:id', component: FightComponent
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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
