import { Component, OnInit } from '@angular/core';
import { MatHorizontalStepper, MatVerticalStepper } from '@angular/material';

import {FormBuilder, FormGroup, Validators, Form, FormControl} from '@angular/forms';

@Component({
  selector: 'app-course-picker',
  templateUrl: './course-picker.component.html',
  styleUrls: ['./course-picker.component.css']
})
export class CoursePickerComponent implements OnInit {

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  forthFormGroup: FormGroup;

  statesControl: FormControl = new FormControl();
  states: ['Oklahoma', 'Texas', 'Kansas']

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.firstFormGroup = this.formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this.formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this.formBuilder.group({
      thirdCtrl: ['', Validators.required]
    });
    this.forthFormGroup = this.formBuilder.group({
      forthCtrl: ['', Validators.required]
    });
  }

}
