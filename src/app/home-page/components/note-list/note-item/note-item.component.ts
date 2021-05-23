import {Component, Input, OnInit} from '@angular/core';
import {HomePageService} from '../../../services/home-page.service';

@Component({
  selector: 'app-note-item',
  templateUrl: './note-item.component.html',
  styleUrls: ['./note-item.component.scss']
})
export class NoteItemComponent implements OnInit {
  isEditing = false;
  @Input() note;

  constructor(
    private homePgeService: HomePageService
  ) {
  }

  ngOnInit(): void {
  }

  delete(id: number): void {
    this.homePgeService.delete$.next(id);
  }
}
