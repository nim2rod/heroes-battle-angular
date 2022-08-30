import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentMarketComponent } from './equipment-market.component';

describe('EquipmentMarketComponent', () => {
  let component: EquipmentMarketComponent;
  let fixture: ComponentFixture<EquipmentMarketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquipmentMarketComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EquipmentMarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
