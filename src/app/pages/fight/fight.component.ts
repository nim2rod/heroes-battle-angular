import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { lastValueFrom,delay,of } from 'rxjs';
import { Hero } from 'src/app/models/hero.model';
import { HeroService } from 'src/app/services/hero-service.service';
import { UserService } from 'src/app/services/user.service';

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
    private router: Router,
    private userService: UserService
  ) { }

  @Input() heroId!: string
  
  hero!: Hero

  ngOnInit(): void {
    this.route.params.subscribe(async params => {
      const hero = await lastValueFrom(this.heroService.getHeroById(params['id']))
      if (hero) this.hero = hero
    })
    
    //BACKROUND FIGHT MUSIC
    let audio = new Audio('../../../assets/sounds/battle.wav')
    audio.play()

    //RANDOM WINNER

    //WIN
    if(Math.random()>0.6){
      setTimeout(()=>{
        this.userService.changeBalance(30)
        this.router.navigateByUrl('/')
      },3500)

    setTimeout(()=>{
      let audio = new Audio('../../../assets/sounds/earn-coin.wav')
      audio.play()
    },2500)


    //LOSE
    } else{
      setTimeout(()=>{
        const updatedHero = this.hero
        updatedHero.life -- 
        this.heroService.saveHero(updatedHero)

        this.userService.changeBalance(-30)
        this.router.navigateByUrl('/')

      },3500)
      setTimeout(()=>{
        let audio = new Audio('../../../assets/sounds/lose.wav')
        audio.play()
      },2500)
    } 
  }

  onBack() {
    this.router.navigateByUrl('/')
  }
}
