import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeTableComponent } from './practice-table.component';

describe('PracticeTableComponent', () => {
  let component: PracticeTableComponent;
  let fixture: ComponentFixture<PracticeTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PracticeTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticeTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
