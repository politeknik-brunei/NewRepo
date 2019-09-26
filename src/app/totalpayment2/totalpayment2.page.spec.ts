import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Totalpayment2Page } from './totalpayment2.page';

describe('Totalpayment2Page', () => {
  let component: Totalpayment2Page;
  let fixture: ComponentFixture<Totalpayment2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Totalpayment2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Totalpayment2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
