import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { UserModel } from 'src/app/models/user.model';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'equipment-market',
  templateUrl: './equipment-market.component.html',
  styleUrls: ['./equipment-market.component.css']
})
export class EquipmentMarketComponent implements OnInit {

  user!: UserModel;
  user$!: Observable<UserModel>;
  userSubscription!: Subscription

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.user$ = this.userService.user$
    this.userSubscription = this.userService.user$.subscribe(user => this.user = user);
  }

  buyAid(price: number,aidNum: number){ 
  if(this.user.balance<(-price)){
    let audio = new Audio('./assets/sounds/stuck.wav')
    audio.play()
    return
  } 

  let audio = new Audio('./assets/sounds/add.wav')
  audio.play()
    this.userService.changeBalance(price)
    this.userService.changeAidNum(aidNum)
  }
}
