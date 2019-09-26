import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Taxitypes1Page } from './taxitypes1.page';

describe('Taxitypes1Page', () => {
  let component: Taxitypes1Page;
  let fixture: ComponentFixture<Taxitypes1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Taxitypes1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Taxitypes1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
