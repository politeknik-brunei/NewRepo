import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomercarePage } from './customercare.page';

describe('CustomercarePage', () => {
  let component: CustomercarePage;
  let fixture: ComponentFixture<CustomercarePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomercarePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomercarePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
