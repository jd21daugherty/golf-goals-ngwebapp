import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoundGoalsSetterComponent } from './round-goals-setter.component';

describe('RoundGoalsSetterComponent', () => {
  let component: RoundGoalsSetterComponent;
  let fixture: ComponentFixture<RoundGoalsSetterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoundGoalsSetterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoundGoalsSetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
