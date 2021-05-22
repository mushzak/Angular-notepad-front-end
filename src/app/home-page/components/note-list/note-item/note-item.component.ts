import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-note-item',
  templateUrl: './note-item.component.html',
  styleUrls: ['./note-item.component.scss']
})
export class NoteItemComponent implements OnInit {
  isEditing = false;
  @Input() note;

  constructor() {
  }

  ngOnInit(): void {
  }

  delete(id: number): void {
    console.log('delete: ' + id);
  }
}
