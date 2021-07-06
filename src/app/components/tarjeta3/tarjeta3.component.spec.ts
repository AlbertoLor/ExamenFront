import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tarjeta3Component } from './tarjeta3.component';

describe('Tarjeta3Component', () => {
  let component: Tarjeta3Component;
  let fixture: ComponentFixture<Tarjeta3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tarjeta3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tarjeta3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
