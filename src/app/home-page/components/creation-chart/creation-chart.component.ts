import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {CustomLinerChartService} from '../../services/custom-liner-chart.service';

@Component({
  selector: 'app-creation-chart',
  templateUrl: './creation-chart.component.html',
  styleUrls: ['./creation-chart.component.scss']
})
export class CreationChartComponent implements OnInit, AfterViewInit {
  @ViewChild('chart') chart: any;

  single: any[] = [
    {
      name: 'notes',
      series: [
        {
          name: 5,
          value: 9
        },
        {
          name: 10,
          value: 11
        },
        {
          name: 15,
          value: 17
        },
        {
          name: 18,
          value: 27
        },
        {
          name: 25,
          value: 36
        },
        {
          name: 28,
          value: 41
        }
      ]
    }
  ];
  view: any[] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = true;
  xAxisLabel = '';
  showYAxisLabel = true;
  yAxisLabel = 'Number of notes';
  timeline = false;

  colorScheme = {
    domain: ['#84acda']
  };

  // line, area
  autoScale = true;

  constructor(
    private customLinerChartService: CustomLinerChartService
  ) {
  }

  onSelect(event): void {
    console.log(event);
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.customLinerChartService.showDots(this.chart);
  }

}
