import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { Hero } from 'src/app/models/hero.model';
import { HeroService } from 'src/app/services/hero-service.service';
import {UserService} from 'src/app/services/user.service'

@Component({
  selector: 'add-hero',
  templateUrl: './add-hero.component.html',
  styleUrls: ['./add-hero.component.css']
})
export class AddHeroComponent implements OnInit {

  constructor(private heroService: HeroService,
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService
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
    this.userService.changeBalance(-120)
    // lastValueFrom(this.heroService.saveHero())
    // await lastValueFrom(this.heroService.saveHero({ ...this.hero }))
    this.router.navigateByUrl('/')
  }

}
