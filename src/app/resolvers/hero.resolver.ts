import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Hero } from '../models/hero.model';
import { HeroService } from '../services/hero-service.service';

@Injectable({
  providedIn: 'root'
})
export class HeroResolver implements Resolve<Hero | void> {

  constructor(private heroService: HeroService) { }

  resolve(route: ActivatedRouteSnapshot) {
    const id = route.params['id']
    return this.heroService.getHeroById(id)
  }
}
