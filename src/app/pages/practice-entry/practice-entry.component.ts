import { Component, AfterViewInit } from '@angular/core';
import * as Chart from 'chart.js';

@Component({
  selector: 'app-practice-entry',
  templateUrl: './practice-entry.component.html',
  styleUrls: ['./practice-entry.component.css']
})
export class PracticeEntryComponent implements AfterViewInit {

  constructor() { }

  canvas: any;
  ctx: any;

  timePeriods = ['2 weeks', '1 month', '3 months', '6 months', '1 year'];

  ngAfterViewInit() {
    this.canvas = document.getElementById('myChart');
    this.ctx = this.canvas.getContext('2d');
    var myChart = new Chart(this.ctx, {
      type: 'bar',
      data: {
          labels: ['Driver', 'Irons', 'Short Game', 'Wedges', 'Putting'],
          datasets: [{
              label: 'Golf Shots',
              data: [30, 10, 20, 15, 25],
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)'
              ]
          }]
      },
      options: {
        responsive: false,
        scales: {
          yAxes: [{
            display: true,
            ticks: {
              min: 0,
              max: 100,
              callback: (value) => {
                  return value + '%';
              }
            }
          }]
        }
      }
    });
  }

  changeTimePeriod(time: string): void {
    var rootMenuButton = document.getElementById('btn-root-menu');
    rootMenuButton.innerHTML = time;
  }

}






