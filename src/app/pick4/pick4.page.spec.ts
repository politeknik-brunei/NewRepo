import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pick4Page } from './pick4.page';

describe('Pick4Page', () => {
  let component: Pick4Page;
  let fixture: ComponentFixture<Pick4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pick4Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pick4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
