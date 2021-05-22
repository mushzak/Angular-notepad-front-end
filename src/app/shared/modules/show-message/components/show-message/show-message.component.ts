import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {Subscription} from 'rxjs';
import {ModalService} from '../../../../services/modal.service';

@Component({
  selector: 'app-show-message',
  templateUrl: './show-message.component.html',
  styleUrls: ['./show-message.component.scss']
})
export class ShowMessageComponent implements OnInit, OnDestroy {
  private  subscriptions: Subscription = new Subscription();
  @Output() isConfirmed: EventEmitter<boolean> = new EventEmitter();
  messages = [];
  showMessagesIcon = false;

  constructor(
    private modalService: ModalService
  ) {
  }

  ngOnInit(): void {
    this.subscriptions.add(
      this.modalService.showMessage$.subscribe((data) => {
        this.messages = data;
      })
    );
    this.subscriptions.add(
      this.modalService.messagesIcon$.subscribe(data => {
        this.showMessagesIcon = data;
      })
    );
  }

  close(): void {
    this.modalService.close();
  }
  ngOnDestroy(): void{
    this.subscriptions.unsubscribe();
  }
}

