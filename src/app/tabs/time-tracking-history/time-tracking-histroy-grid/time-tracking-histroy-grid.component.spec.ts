import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeTrackingHistroyGridComponent } from './time-tracking-histroy-grid.component';

describe('TimeTrackingHistroyGridComponent', () => {
  let component: TimeTrackingHistroyGridComponent;
  let fixture: ComponentFixture<TimeTrackingHistroyGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeTrackingHistroyGridComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeTrackingHistroyGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
