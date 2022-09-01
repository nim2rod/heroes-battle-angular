import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../models/user.model';
import { Router } from '@angular/router';
import { UserService} from '../../services/user.service'
 
@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user!: UserModel

  constructor(private userService: UserService, private router: Router) { 
  }

  ngOnInit() {
    this.user = new UserModel()
  }

  async signUp() {
    await this.userService.signup(this.user.name).toPromise();
    this.router.navigate(['/rules']);
}

}
