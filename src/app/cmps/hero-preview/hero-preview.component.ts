import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Hero } from 'src/app/models/hero.model';

@Component({
  selector: 'hero-preview',
  templateUrl: './hero-preview.component.html',
  styleUrls: ['./hero-preview.component.css']
})
export class HeroPreviewComponent implements OnInit {

  constructor() { }
  @Input() hero!: Hero
  @Output() onRemove = new EventEmitter<string>()

  ngOnInit(): void {
  }

  onRemoveHero() {
    this.onRemove.emit(this.hero._id)
  }
}
