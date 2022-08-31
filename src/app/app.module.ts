import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app-root/app.component';
import { AppHeaderComponent } from './cmps/app-header/app-header.component';
import { HeroFilterComponent } from './cmps/hero-filter/hero-filter.component';
import { HeroListComponent } from './cmps/hero-list/hero-list.component';
import { HeroPreviewComponent } from './cmps/hero-preview/hero-preview.component';
import { AboutComponent } from './pages/about/about.component';
import { BattleAppComponent } from './pages/battle-app/battle-app.component';
import { HeroDetailsComponent } from './pages/hero-details/hero-details.component';
import { AddHeroComponent } from './pages/add-hero/add-hero.component';
import { EquipmentMarketComponent } from './pages/equipment-market/equipment-market.component';
import { FightComponent } from './pages/fight/fight.component';
import { FormsModule } from '@angular/forms';
import { SignupComponent } from './pages/signup/signup.component';


@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    HeroFilterComponent,
    HeroListComponent,
    HeroPreviewComponent,
    AboutComponent,
    BattleAppComponent,
    HeroDetailsComponent,
    AddHeroComponent,
    EquipmentMarketComponent,
    FightComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
