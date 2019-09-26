import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QrcodebusPage } from './qrcodebus.page';

describe('QrcodebusPage', () => {
  let component: QrcodebusPage;
  let fixture: ComponentFixture<QrcodebusPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QrcodebusPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QrcodebusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
