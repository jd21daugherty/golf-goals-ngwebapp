import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeePickerComponent } from './tee-picker.component';

describe('TeePickerComponent', () => {
  let component: TeePickerComponent;
  let fixture: ComponentFixture<TeePickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeePickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
