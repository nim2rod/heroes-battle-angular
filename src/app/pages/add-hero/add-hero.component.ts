import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { Hero } from 'src/app/models/hero.model';
import { HeroService } from 'src/app/services/hero-service.service';
import {UserService} from 'src/app/services/user.service'
import { UserModel } from 'src/app/models/user.model';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'add-hero',
  templateUrl: './add-hero.component.html',
  styleUrls: ['./add-hero.component.css']
})
export class AddHeroComponent implements OnInit {

  user!: UserModel;
  user$!: Observable<UserModel>;
  userSubscription!: Subscription

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
    this.user$ = this.userService.user$
    this.userSubscription = this.userService.user$.subscribe(user => this.user = user);
  }

  async onSaveHero() {
    if(this.user.balance<120) return

    await this.heroService.saveHero(this.hero)
    this.userService.changeBalance(-120)
    this.router.navigateByUrl('/')

    // lastValueFrom(this.heroService.saveHero())
    // await lastValueFrom(this.heroService.saveHero({ ...this.hero }))
  }

}
