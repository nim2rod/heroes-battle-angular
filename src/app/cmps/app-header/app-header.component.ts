import { Component, OnInit } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { UserModel } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit {
  user!: UserModel;
  user$!: Observable<UserModel>;
  userSubscription!: Subscription

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.user$ = this.userService.user$
    this.userSubscription = this.userService.user$.subscribe(user => this.user = user);
  }
}
