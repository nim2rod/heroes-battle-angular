import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { Hero } from 'src/app/models/hero.model';
import { HeroService } from 'src/app/services/hero-service.service';

@Component({
  selector: 'add-hero',
  templateUrl: './add-hero.component.html',
  styleUrls: ['./add-hero.component.css']
})
export class AddHeroComponent implements OnInit {

  constructor(private heroService: HeroService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  hero!: Hero

  ngOnInit(): void {
    this.route.data.subscribe(({ hero }) => {
      this.hero = hero || this.heroService.getEmptyHero() as Hero
    })
  }

  async onSaveHero() {
    console.log(this.hero);
    await this.heroService.saveHero(this.hero)

    // lastValueFrom(this.heroService.saveHero())
    // await lastValueFrom(this.heroService.saveHero({ ...this.hero }))
    this.router.navigateByUrl('/')
  }

}
