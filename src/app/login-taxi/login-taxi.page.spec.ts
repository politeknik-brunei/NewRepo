import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginTaxiPage } from './login-taxi.page';

describe('LoginTaxiPage', () => {
  let component: LoginTaxiPage;
  let fixture: ComponentFixture<LoginTaxiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginTaxiPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginTaxiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
