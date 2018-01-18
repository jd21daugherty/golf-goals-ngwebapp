import { Component, OnInit } from '@angular/core';
import { CoursePickerComponent } from './components/course-picker/course-picker.component';

import { MatHorizontalStepper, MatVerticalStepper } from '@angular/material';
import {FormBuilder, FormGroup, Validators, Form, FormControl} from '@angular/forms';

@Component({
  selector: 'app-start-round',
  templateUrl: './start-round.component.html',
  styleUrls: ['./start-round.component.css']
})
export class StartRoundComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder
  ) { }

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  forthFormGroup: FormGroup;

  statesControl = new FormControl('', [Validators.required]);
  states: ['Oklahoma', 'Texas', 'Kansas']
  selectedState: string;

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
