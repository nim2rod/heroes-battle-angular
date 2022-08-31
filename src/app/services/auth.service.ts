import { Injectable } from '@angular/core';
import { Router, CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {

  constructor( public auth: UserService, private router: Router ) { }
  // constructor( private router: Router ) { }


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const isAuth = this.auth.isAuthenticated()
    const isTargetSignup = state.url.endsWith('signup')

    // this.router.navigateByUrl('/signup');
    // return false

    if (!isAuth && !isTargetSignup) {
      this.router.navigateByUrl('/signup');
      return false;
  } else if (isAuth && isTargetSignup) {
      this.router.navigateByUrl('/');
      return false;
  } else {
      return true;
  }

  }
}
