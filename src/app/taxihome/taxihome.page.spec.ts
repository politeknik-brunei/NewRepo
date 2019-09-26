import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxihomePage } from './taxihome.page';

describe('TaxihomePage', () => {
  let component: TaxihomePage;
  let fixture: ComponentFixture<TaxihomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaxihomePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxihomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
