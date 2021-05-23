import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Subscription} from 'rxjs';
import {debounceTime} from 'rxjs/operators';
import * as moment from 'moment';
import {formatDate} from '@angular/common';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {
  searchForm: FormGroup;
  chartFilterForm: FormGroup;
  subscription: Subscription = new Subscription();
  @Output() typing: EventEmitter<string> = new EventEmitter();

  constructor(
    private fb: FormBuilder,
  ) {
  }

  ngOnInit(): void {
    this.initializeForm();
    this.initializeListeners();
  }

  /**
   * Initializes search form property with the corresponding fields (title,description)
   */
  initializeForm(): void {
    this.searchForm = this.fb.group({
      query: ['', [Validators.required]],
    });
    this.chartFilterForm = this.fb.group({
      from: [formatDate(moment().add(-30, 'days').format(), 'yyyy-MM-dd', 'en')],
      to: [formatDate(moment.now(), 'yyyy-MM-dd', 'en')],
    });
    // this.chartFilterForm.get('from').setValue(formatDate(moment().add(-30, 'days').format(), 'yyyy-MM-dd', 'en'));
    // this.chartFilterForm.get('to').setValue(formatDate(moment.now(), 'yyyy-MM-dd', 'en'));
  }

  initializeListeners(): void {
    this.subscription.add(
      this.searchForm.get('query').valueChanges.pipe(
        debounceTime(200),
      ).subscribe(value => {
        this.typing.emit(value);
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
