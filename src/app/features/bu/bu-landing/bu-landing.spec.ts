import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuLanding } from './bu-landing';

describe('BuLanding', () => {
  let component: BuLanding;
  let fixture: ComponentFixture<BuLanding>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuLanding]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuLanding);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
