import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeEntryComponent } from './practice-entry.component';

describe('PracticeEntryComponent', () => {
  let component: PracticeEntryComponent;
  let fixture: ComponentFixture<PracticeEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PracticeEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticeEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
