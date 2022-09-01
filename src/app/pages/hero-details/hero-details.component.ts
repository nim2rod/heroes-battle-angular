import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Hero } from 'src/app/models/hero.model';
import { HeroService } from 'src/app/services/hero-service.service';
import { UserService } from 'src/app/services/user.service';
import { UserModel } from 'src/app/models/user.model';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
})
export class HeroDetailsComponent implements OnInit {

  user!: UserModel;
  user$!: Observable<UserModel>;
  userSubscription!: Subscription

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private heroService: HeroService,
    private userService: UserService
  ) { }

  @Input() heroId!: string
  hero!: Hero

  async ngOnInit() {
    this.route.data.subscribe(data => {
      this.hero = data['hero']
    })

    this.user$ = this.userService.user$
    this.userSubscription = this.userService.user$.subscribe(user => this.user = user);
  }

  onBack() {
    this.router.navigateByUrl('/')
  }

  onHeal() {
   if(this.user.aid<1) return
      //update hero
        const updatedHero = this.hero
        updatedHero.life ++
        this.heroService.saveHero(updatedHero)

      //update user
        this.userService.changeAidNum(-1)
  }

}
