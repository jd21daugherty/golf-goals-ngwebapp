import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeEntryModalComponent } from './practice-entry-modal.component';

describe('PracticeEntryModalComponent', () => {
  let component: PracticeEntryModalComponent;
  let fixture: ComponentFixture<PracticeEntryModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PracticeEntryModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticeEntryModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
