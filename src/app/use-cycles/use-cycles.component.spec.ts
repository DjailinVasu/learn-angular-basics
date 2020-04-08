import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UseCyclesComponent } from './use-cycles.component';

describe('UseCyclesComponent', () => {
  let component: UseCyclesComponent;
  let fixture: ComponentFixture<UseCyclesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UseCyclesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UseCyclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
