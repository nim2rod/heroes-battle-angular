import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BattleAppComponent } from './battle-app.component';

describe('BattleAppComponent', () => {
  let component: BattleAppComponent;
  let fixture: ComponentFixture<BattleAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BattleAppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BattleAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
