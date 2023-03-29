import { Component, Input, OnInit } from '@angular/core';
import { FlexAlignDirective } from '@angular/flex-layout';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  chartOptions={}
  Highcharts=Highcharts
  @Input() t=""
  constructor() { }

  ngOnInit(): void {
    this.chartOptions =  {

      title: {
          text: 'Logarithmic axis demo'
      },
  
      xAxis: {
          tickInterval: 1,
          type: 'logarithmic',
          accessibility: {
              rangeDescription: 'Range: 1 to 10'
          }
      },
  
      yAxis: {
          type: 'logarithmic',
          minorTickInterval: 0.1,
          accessibility: {
              rangeDescription: 'Range: 0.1 to 1000'
          }
      },
  
      tooltip: {
          headerFormat: '<b>{series.name}</b><br />',
          pointFormat: 'x = {point.x}, y = {point.y}'
      },
     exporting:{
      enabled:false
     },
     credits:{
      enabled:false
     },
  
      series: [{
          data: [1, 2, 4, 8, 16, 32, 64, 128, 256, 512],
          pointStart: 1
      }]
  }
  }

}
