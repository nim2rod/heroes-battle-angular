import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { UserModel } from '../models/user.model';
import { UtilsService } from './utils.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private KEY = 'user';
  private _user!: UserModel

  private _user$ = new BehaviorSubject<UserModel>(this.utilService.load(this.KEY) || null)
  public user$ = this._user$.asObservable()

  constructor(private utilService: UtilsService) { }

  public signup(name: string) {
    let user = this.utilService.load(this.KEY)
    
    if (!user) {
      let newUser = new UserModel();
      newUser.name = name;
      this.utilService.store(this.KEY, newUser);
      this._user = newUser;
    }
    this._user$.next(this._user);
    return of()
  }

  public isAuthenticated(): boolean {
    const user = this._user$.getValue();
    
    return !!user
    // return (user) ? true : false;
}

public getUser() {
  return this.user$;
}

public changeBalance(amount: number) {
  const editedUser = { ...this._user$.value };
  if((editedUser.balance + amount)<0) return
  editedUser.balance += amount;
  this.utilService.store(this.KEY, editedUser);
  this._user$.next(editedUser);
  return 1
}

public changeAidNum(num: number){
  const editedUser = { ...this._user$.value };
  if((editedUser.aid + num)<0) return
  editedUser.aid += num;
  this.utilService.store(this.KEY, editedUser);
  this._user$.next(editedUser);
  return 1
}

}
