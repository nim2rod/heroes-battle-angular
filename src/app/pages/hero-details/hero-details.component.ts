import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Hero } from 'src/app/models/hero.model';
import { HeroService } from 'src/app/services/hero-service.service';

@Component({
  selector: 'hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
})
export class HeroDetailsComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private heroService: HeroService
  ) { }

  @Input() heroId!: string
  hero!: Hero

  async ngOnInit() {
    this.route.data.subscribe(data => {
      this.hero = data['hero']
    })
  }

  onBack() {
    this.router.navigateByUrl('/')
  }

}
