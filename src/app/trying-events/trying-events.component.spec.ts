import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TryingEventsComponent } from './trying-events.component';

describe('TryingEventsComponent', () => {
  let component: TryingEventsComponent;
  let fixture: ComponentFixture<TryingEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TryingEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TryingEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
