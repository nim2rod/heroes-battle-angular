import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Hero } from 'src/app/models/hero.model';
import { HeroService } from 'src/app/services/hero-service.service';

@Component({
  selector: 'battle-app',
  templateUrl: './battle-app.component.html',
  styleUrls: ['./battle-app.component.css']
})
export class BattleAppComponent implements OnInit {

  constructor(private heroService: HeroService) { }
  heroes!: Hero[]
  heroes$!: Observable<Hero[]>
  subscription!: Subscription

  ngOnInit(): void {
    this.heroService.loadHeroes()
    this.heroes$ = this.heroService.Heroes$
  }

  onRemoveHero(heroId: string) {
    console.log('onremove');

    this.heroService.deleteHero(heroId)
  }

}
