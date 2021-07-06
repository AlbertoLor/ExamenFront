import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tarjeta4Component } from './tarjeta4.component';

describe('Tarjeta4Component', () => {
  let component: Tarjeta4Component;
  let fixture: ComponentFixture<Tarjeta4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tarjeta4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tarjeta4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
