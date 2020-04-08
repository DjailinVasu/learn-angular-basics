import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstDirectiveComponent } from './first-directive.component';

describe('FirstDirectiveComponent', () => {
  let component: FirstDirectiveComponent;
  let fixture: ComponentFixture<FirstDirectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstDirectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
