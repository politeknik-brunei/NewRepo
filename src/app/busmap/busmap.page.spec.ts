import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusmapPage } from './busmap.page';

describe('BusmapPage', () => {
  let component: BusmapPage;
  let fixture: ComponentFixture<BusmapPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusmapPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusmapPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
