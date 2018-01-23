import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practice-table',
  templateUrl: './practice-table.component.html',
  styleUrls: ['./practice-table.component.css']
})
export class PracticeTableComponent implements OnInit {

  datepickerFormNames: Array<string> = ['picker1', 'picker2',
                                        'picker3', 'picker4',
                                        'picker5'];

  tableColumns: Array<number> = [1,2,3,4,5];

  constructor() { }

  ngOnInit() {
  }

}
