import { TestBed } from '@angular/core/testing';

import { CustomLinerChartService } from './custom-liner-chart.service';

describe('CustomLinerChartService', () => {
  let service: CustomLinerChartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomLinerChartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
