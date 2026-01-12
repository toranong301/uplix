import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Layo } from './layo';

describe('Layo', () => {
  let component: Layo;
  let fixture: ComponentFixture<Layo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Layo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Layo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
