import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxitypesPage } from './taxitypes.page';

describe('TaxitypesPage', () => {
  let component: TaxitypesPage;
  let fixture: ComponentFixture<TaxitypesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaxitypesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxitypesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
