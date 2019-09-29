import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginBusPage } from './login-bus.page';

describe('LoginBusPage', () => {
  let component: LoginBusPage;
  let fixture: ComponentFixture<LoginBusPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginBusPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginBusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
