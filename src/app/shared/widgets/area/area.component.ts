import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})
export class AreaComponent implements OnInit {
  chartOptions={}
  Highcharts=Highcharts
  constructor() { }

  ngOnInit(): void {
    this.chartOptions= {
      chart: {
          type: 'area'
      },
      title: {
          text: 'Area Diagram-Placements'
      },
      subtitle: {
          text: 'Luminar technolab'
      },
      yAxis: {
          title: {
              useHTML: true,
              text: 'Number of placements'
          }
      },
      tooltip: {
          shared: true,
          headerFormat: '<span style="font-size:12px"><b>{point.key}</b></span><br>'
      },
      plotOptions: {
          series: {
              pointStart: 2012
          },
          area: {
              stacking: 'normal',
              lineColor: '#666666',
              lineWidth: 1,
              marker: {
                  lineWidth: 1,
                  lineColor: '#666666'
              }
          }
      },
      credits:{
        enabled:false
      },
      exporting:{
     enabled:true
      },
      series: [{
          name: 'Meran Stack',
          data: [13234, 12729, 11533, 17798, 10398, 12811, 15483, 16196, 16214]
      }, {
          name: 'Software Testing',
          data: [6685, 6535, 6389, 6384, 6251, 5725, 5631, 5047, 5039]
  
      }, {
          name: 'Big data',
          data: [4752, 4820, 4877, 4925, 5006, 4976, 4946, 4911, 4913]
      }, {
          name: 'Python Django',
          data: [3164, 3541, 3898, 4115, 3388, 3569, 3887, 4593, 1550]
  
      }, {
          name: 'Andriod Develpoment1',
          data: [2019, 2189, 2150, 2217, 2175, 2257, 2344, 2176, 2186]
      }]
  }

  HC_exporting(Highcharts);
  setTimeout(()=>{
     Window:dispatchEvent(
      new Event('resize')
     )
  },300)

  }


}
