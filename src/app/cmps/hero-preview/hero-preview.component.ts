import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Hero } from 'src/app/models/hero.model';
import { UserService } from '../../services/user.service';
import { UserModel } from 'src/app/models/user.model';
import { Subscription } from 'rxjs';
import { HeroService } from 'src/app/services/hero-service.service';

@Component({
  selector: 'hero-preview',
  templateUrl: './hero-preview.component.html',
  styleUrls: ['./hero-preview.component.css']
})
export class HeroPreviewComponent implements OnInit {

    // user!: UserModel;
    // userSubscriber!: Subscription;

  constructor(private userService: UserService, private heroService: HeroService) { }

  @Input() hero!: Hero
  @Output() onRemove = new EventEmitter<string>()

  ngOnInit(): void {
    // this.userSubscriber = this.userService.user$.subscribe(user => this.user = user);
  }

//   ngOnDestroy() {
//     this.userSubscriber.unsubscribe();
// }

  onRemoveHero() {
    console.log(this.hero);
    
    this.onRemove.emit(this.hero._id)
    // this.heroService.deleteHero(this.hero._id)
    this.userService.changeBalance(30)
  }
}
