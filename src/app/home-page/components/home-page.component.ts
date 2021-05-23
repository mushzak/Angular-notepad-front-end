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
  subscription: Subscription = new Subscription();
  reqData = {
    offset: 0,
    limit: 10,
    query: '',
  };

  constructor(
    private homePageService: HomePageService
  ) {
  }

  ngOnInit(): void {
    this.initializeListeners();
  }

  initializeListeners(): void {
    this.getNotes();
    this.subscription.add(
      this.homePageService.submitted$.pipe(
        switchMap(data => {
          if (data.type === 'create') {
            return this.homePageService.createNote(data.body);
          } else if (data.type === 'edit') {
            return this.homePageService.updateNote(data.body, data.id);
          }
        })
      ).subscribe(res => {
        this.getNotes();
        this.homePageService.created$.next(res);
      })
    );
    this.subscription.add(
      this.homePageService.delete$.pipe(
        switchMap(id => {
          if (id) {
            return this.homePageService.deleteNote(id);
          }
        })
      ).subscribe(id => {
        this.notes = this.notes.filter(note => note.id !== id);
      })
    );
  }

  searchText($event: string): void {
    this.reqData  = {
      offset: 0,
      limit: 10,
      query: $event
    };
    this.getNotes();
  }

  // { query: string, offset: number, limit: number }
  private getNotes(): void {
    this.subscription.add(
      this.homePageService.getNotes(this.reqData).subscribe(notes => {
        this.notes = notes;
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
