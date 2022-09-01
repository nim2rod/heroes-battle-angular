import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, of, throwError } from 'rxjs';
import { Hero } from '../models/hero.model';
import { HeroFilter } from '../models/hero.filter';

const HOROES = [
  {
    "_id": "5a56640269f443a5d64b32ca",
    "name": "Ochoa Hyde",
    "typeOf": "Samorai",
    "attacks": "Bow and arrow",
    "power": 5,
    "life": 2
  },
  {
    "_id": "5a5664025f6ae9aa24a99fde",
    "name": "Hallie Mclean",
    "typeOf": "Robot",
    "attacks": "Bow and arrow",
    "power": 5,
    "life": 2
  },
  {
    "_id": "5a56640252d6acddd183d319",
    "name": "Parsons Norris",
    "typeOf": "Ninja",
    "attacks": "Spear",
    "power": 5,
    "life": 2
  },
  {
    "_id": "5a566402ed1cf349f0b47b4d",
    "name": "Rachel Lowe",
    "typeOf": "Spartan",
    "attacks": "Sword",
    "power": 5,
    "life": 2
  },
  {
    "_id": "5a566402abce24c6bfe4699d",
    "name": "Dominique Soto",
    "typeOf": "Robot",
    "attacks": "Water jet",
    "power": 5,
    "life": 2
  },
  {
    "_id": "5a566402a6499c1d4da9220a",
    "name": "Shana Pope",
    "typeOf": "Samorai",
    "attacks": "Rugatka",
    "power": 5,
    "life": 2
  },
  {
    "_id": "5a566402f90ae30e97f990db",
    "name": "Faulkner Flores",
    "typeOf": "Ninja",
    "attacks": "Bow and arrow",
    "power": 5,
    "life": 2
  },
  {
    "_id": "5a5664027bae84ef280ffbdf",
    "name": "Holder Bean",
    "typeOf": "Samorai",
    "attacks": "Spear",
    "power": 5,
    "life": 2
  },
  {
    "_id": "5a566402e3b846c5f6aec652",
    "name": "Rosanne Shelton",
    "typeOf": "Pirate",
    "attacks": "Sword",
    "power": 5,
    "life": 2
  },
  {
    "_id": "5a56640272c7dcdf59c3d411",
    "name": "Pamela Nolan",
    "typeOf": "Robot",
    "attacks": "Slingstone",
    "power": 5,
    "life": 2
  },
  {
    "_id": "5a5664029a8dd82a6178b15f",
    "name": "Roy Cantu",
    "typeOf": "Spartan",
    "attacks": "Water jet",
    "power": 5,
    "life": 2
  },
  {
    "_id": "5a5664028c096d08eeb13a8a",
    "name": "Ollie Christian",
    "typeOf": "Ninja",
    "attacks": "Spear",
    "power": 5,
    "life": 2
  },
  {
    "_id": "5a5664026c53582bb9ebe9d1",
    "name": "Nguyen Walls",
    "typeOf": "Pirate",
    "attacks": "Slingstone",
    "power": 5,
    "life": 2
  },
  {
    "_id": "5a56640298ab77236845b82b",
    "name": "Glenna Santana",
    "typeOf": "Spartan",
    "attacks": "Rugatka",
    "power": 5,
    "life": 2
  },
  {
    "_id": "5a56640208fba3e8ecb97305",
    "name": "Malone Clark",
    "typeOf": "Robot",
    "attacks": "Rugatka",
    "power": 5,
    "life": 2
  },
  {
    "_id": "5a566402abb3146207bc4ec5",
    "name": "Floyd Rutledge",
    "typeOf": "Troy",
    "attacks": "Water jet",
    "power": 5,
    "life": 2
  },
  {
    "_id": "5a56640298500fead8cb1ee5",
    "name": "Grace James",
    "typeOf": "Robot",
    "attacks": "Water jet",
    "power": 5,
    "life": 2
  },
  {
    "_id": "5a56640243427b8f8445231e",
    "name": "Tanner Gates",
    "typeOf": "Pirate",
    "attacks": "Spear",
    "power": 5,
    "life": 2
  },
  {
    "_id": "5a5664025c3abdad6f5e098c",
    "name": "Lilly Conner",
    "typeOf": "Samorai",
    "attacks": "Bow and arrow",
    "power": 5,
    "life": 2
  }
];

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor(private http: HttpClient) {
  }

  //mock the server
  private _heroesDb: Hero[] = HOROES;

  private _Heroes$ = new BehaviorSubject<Hero[]>([])
  public Heroes$ = this._Heroes$.asObservable()

  private _filterBy$ = new BehaviorSubject<HeroFilter>({ term: '' });
  public filterBy$ = this._filterBy$.asObservable()

  public loadHeroes(): void {
    const filterBy = this._filterBy$.getValue()
    let Heros = this._heroesDb;
    if (filterBy?.term) {
      Heros = this._filter(Heros, filterBy.term)
    }
    this._Heroes$.next(this._sort(Heros))
  }

  public getEmptyHero() {
    return {
      name: '', typeOf: '', attacks: '', power: 5,
      life: 2
    }
  }

  public getHeroById(id: string): Observable<Hero> {
    //mock the server work
    const Hero = this._heroesDb.find(Hero => Hero._id === id)

    //return an observable
    return Hero ? of(Hero) : throwError(() => `Hero id ${id} not found!`)
  }

  public deleteHero(id: string) {
    //mock the server work
    this._heroesDb = this._heroesDb.filter(Hero => Hero._id !== id)

    // change the observable data in the service - let all the subscribers know
    this._Heroes$.next(this._heroesDb)
  }

  public saveHero(Hero: Hero) {
    if(Hero.life < 1) this.deleteHero(Hero._id as string) 

    return Hero._id ? this._updateHero(Hero) : this._addHero(Hero)
  }

  private _updateHero(Hero: Hero) {
    //mock the server work
    this._heroesDb = this._heroesDb.map(c => Hero._id === c._id ? Hero : c)
    // change the observable data in the service - let all the subscribers know
    this._Heroes$.next(this._sort(this._heroesDb))
    return of(Hero)
  }

  private _addHero(hero: Hero) {
    //mock the server work
    const newHero = new Hero(hero.name, hero.typeOf, hero.attacks, hero.power, hero.life);
    if (typeof newHero.setId === 'function') newHero.setId();
    this._heroesDb.push(newHero)
    this._Heroes$.next(this._sort(this._heroesDb))
    return of(Hero)

  }

  private _sort(Heros: Hero[]): Hero[] {
    return Heros.sort((a, b) => {
      if (a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase()) {
        return -1;
      }
      if (a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase()) {
        return 1;
      }
      return 0;
    })
  }

  public setFilterBy(filterBy: HeroFilter) {
    this._filterBy$.next(filterBy)
    this.loadHeroes()
  }

  private _filter(Heros: Hero[], term: string) {
    term = term.toLocaleLowerCase()
    return Heros.filter(Hero => {
      return Hero.name.toLocaleLowerCase().includes(term) ||
        Hero.attacks.toLocaleLowerCase().includes(term) ||
        Hero.typeOf.toLocaleLowerCase().includes(term)
    })
  }
}


