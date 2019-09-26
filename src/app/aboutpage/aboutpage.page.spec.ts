import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutpagePage } from './aboutpage.page';

describe('AboutpagePage', () => {
  let component: AboutpagePage;
  let fixture: ComponentFixture<AboutpagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutpagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutpagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
