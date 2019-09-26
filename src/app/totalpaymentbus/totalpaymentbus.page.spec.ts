import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalpaymentbusPage } from './totalpaymentbus.page';

describe('TotalpaymentbusPage', () => {
  let component: TotalpaymentbusPage;
  let fixture: ComponentFixture<TotalpaymentbusPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalpaymentbusPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalpaymentbusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
