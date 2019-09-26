import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pick6Page } from './pick6.page';

describe('Pick6Page', () => {
  let component: Pick6Page;
  let fixture: ComponentFixture<Pick6Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pick6Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pick6Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
