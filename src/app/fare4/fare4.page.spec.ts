import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Fare4Page } from './fare4.page';

describe('Fare4Page', () => {
  let component: Fare4Page;
  let fixture: ComponentFixture<Fare4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fare4Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fare4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
