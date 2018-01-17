import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewRoundSetupComponent } from './review-round-setup.component';

describe('ReviewRoundSetupComponent', () => {
  let component: ReviewRoundSetupComponent;
  let fixture: ComponentFixture<ReviewRoundSetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewRoundSetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewRoundSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
