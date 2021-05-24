import {AfterViewInit, Component, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {CustomLinerChartService} from '../../services/custom-liner-chart.service';
import {ChartData} from '../../model/chart-data.model';
import {HomePageService} from '../../services/home-page.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-creation-chart',
  templateUrl: './creation-chart.component.html',
  styleUrls: ['./creation-chart.component.scss']
})
export class CreationChartComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('chart') chart: any;
  subscription: Subscription = new Subscription();

  single: ChartData[] = [
    {
      name: 'notes',
      series: []
    }
  ];

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
    private customLinerChartService: CustomLinerChartService,
    private homePageService: HomePageService
  ) {
  }

  ngOnInit(): void {
  }

  initializeListeners(): void {
    this.subscription.add(
      this.homePageService.chartDataSub$.subscribe(points => {
        this.single = [
          {
            name: 'notes',
            series: points
          }
        ];
      })
    );
  }

  ngAfterViewInit(): void {
    this.initializeListeners();
    this.customLinerChartService.showDots(this.chart);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }


}
