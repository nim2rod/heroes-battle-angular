import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Hero } from 'src/app/models/hero.model';

@Component({
  selector: 'hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {

  constructor() { }
  @Input() heroes!: Hero[] | null
  @Output() onRemove = new EventEmitter<string>()

  ngOnInit(): void {
  }

}
