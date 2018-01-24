import { Component, OnInit } from '@angular/core';
import { MatDatepickerInputEvent, MatFormFieldControl } from '@angular/material';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-practice-table',
  templateUrl: './practice-table.component.html',
  styleUrls: ['./practice-table.component.css']
})
export class PracticeTableComponent implements OnInit {

  datepickerFormNames: Array<string> = ['picker1', 'picker2',
                                        'picker3', 'picker4',
                                        'picker5'];

  tableColumns: Array<number> = [-2,1,4,7,10];

  inputDate: FormControl;

  constructor() { 
    this.inputDate = new FormControl(new Date());
  }

  ngOnInit() {
  }

}
