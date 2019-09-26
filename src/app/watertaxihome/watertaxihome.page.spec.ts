import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WatertaxihomePage } from './watertaxihome.page';

describe('WatertaxihomePage', () => {
  let component: WatertaxihomePage;
  let fixture: ComponentFixture<WatertaxihomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WatertaxihomePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WatertaxihomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
