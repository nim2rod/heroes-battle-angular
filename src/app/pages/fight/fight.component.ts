import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { Hero } from 'src/app/models/hero.model';
import { HeroService } from 'src/app/services/hero-service.service';

@Component({
  selector: 'fight',
  templateUrl: './fight.component.html',
  styleUrls: ['./fight.component.css']
})
export class FightComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private http: HttpClient,
    private router: Router
  ) { }

  @Input() heroId!: string
  hero!: Hero
  win!: number

  ngOnInit(): void {
    this.route.params.subscribe(async params => {
      const hero = await lastValueFrom(this.heroService.getHeroById(params['id']))
      if (hero) this.hero = hero
    })
    this.win = 2

    setTimeout(this.yesNoTimeout, 1200)
    // setTimeout(this.loger, 1200)
    // setTimeout(this.onRemoveHero, 1200)


  }

  yesNoTimeout() {
    console.log('yes no');
    // this.loger()
    // this.onRemoveHero()
    // this.router.navigate(['/'])
  }

  // loger() {
  //   console.log('loger');
  // }

  onBack() {
    this.router.navigateByUrl('/')
  }

  // onRemoveHero() {
  //   console.log('this.win', this.win);
  //   console.log('heroId', this.heroId);
  //   console.log('this.hero', this.hero);
  //   console.log('onremove');
  //   this.heroService.deleteHero(id)
  // }
}
