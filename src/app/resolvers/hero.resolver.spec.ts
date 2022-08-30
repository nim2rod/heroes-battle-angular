import { TestBed } from '@angular/core/testing';

import { HeroResolver } from './hero.resolver';

describe('HeroResolver', () => {
  let resolver: HeroResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(HeroResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
