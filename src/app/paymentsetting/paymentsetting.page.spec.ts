import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentsettingPage } from './paymentsetting.page';

describe('PaymentsettingPage', () => {
  let component: PaymentsettingPage;
  let fixture: ComponentFixture<PaymentsettingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentsettingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentsettingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
