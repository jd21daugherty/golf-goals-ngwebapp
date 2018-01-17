import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberHolesPickerComponent } from './number-holes-picker.component';

describe('NumberHolesPickerComponent', () => {
  let component: NumberHolesPickerComponent;
  let fixture: ComponentFixture<NumberHolesPickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumberHolesPickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberHolesPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
