import {Component, OnDestroy, OnInit} from '@angular/core';
import {HomePageService} from '../services/home-page.service';
import {Note} from '../model/note.model';
import {Subscription} from 'rxjs';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit, OnDestroy {
  notes: Note[];
  query: string;
  subscription: Subscription = new Subscription();

  constructor(
    private homePageService: HomePageService
  ) {
  }

  ngOnInit(): void {
    this.initializeListeners();
  }

  initializeListeners(): void {
    this.getNotes();
    this.homePageService.submitted$.pipe(
      switchMap(data => {
        if (data.type === 'create') {
          return this.homePageService.createNote(data.body);
        }
      })
    ).subscribe(res => {
      this.getNotes();
      this.homePageService.created$.next(res);
    });
  }

  searchText($event: string): void {
    this.query = $event;
  }

  private getNotes(): void {
    this.subscription.add(
      this.homePageService.getNotes().subscribe(notes => {
        this.notes = notes;
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
