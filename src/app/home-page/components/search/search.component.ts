import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Subscription} from 'rxjs';
import {debounceTime} from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {
  searchForm: FormGroup;
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
