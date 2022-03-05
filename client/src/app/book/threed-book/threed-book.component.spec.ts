/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ThreedBookComponent } from './threed-book.component';

describe('ThreedBookComponent', () => {
  let component: ThreedBookComponent;
  let fixture: ComponentFixture<ThreedBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreedBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreedBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
