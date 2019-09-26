import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainloginsignupPagePage } from './mainloginsignup-page.page';

describe('MainloginsignupPagePage', () => {
  let component: MainloginsignupPagePage;
  let fixture: ComponentFixture<MainloginsignupPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainloginsignupPagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainloginsignupPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
