import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HeroFilter } from 'src/app/models/hero.filter';
import { HeroService } from 'src/app/services/hero-service.service';

@Component({
  selector: 'hero-filter',
  templateUrl: './hero-filter.component.html',
  styleUrls: ['./hero-filter.component.css']
})
export class HeroFilterComponent implements OnInit {

  constructor(private heroService: HeroService) { }
  filterBy!: HeroFilter
  subscription!: Subscription

  ngOnInit(): void {
    this.subscription = this.heroService.filterBy$.subscribe(filterBy => {
      this.filterBy = filterBy
    })
  }

  onChangeFilter() {
    this.heroService.setFilterBy(this.filterBy)
  }

}
