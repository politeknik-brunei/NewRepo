import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserprofilePagePage } from './userprofile-page.page';

describe('UserprofilePagePage', () => {
  let component: UserprofilePagePage;
  let fixture: ComponentFixture<UserprofilePagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserprofilePagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserprofilePagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
