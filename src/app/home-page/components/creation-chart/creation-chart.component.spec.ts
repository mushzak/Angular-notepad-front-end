import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationChartComponent } from './creation-chart.component';

describe('CreationChartComponent', () => {
  let component: CreationChartComponent;
  let fixture: ComponentFixture<CreationChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreationChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreationChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
