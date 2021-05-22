import {ApplicationRef, ComponentFactoryResolver, EmbeddedViewRef, Injectable, Injector} from '@angular/core';
import {BehaviorSubject, Subject, Subscription} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ModalService {
  showMessage$: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  saveDelete$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  messagesIcon$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  private componentRef: any;
  private modalContainer: any;
  isConfirmed = new Subject<boolean>();
  confirmSub: Subscription;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector) {
  }

  private createFormModal(component: any): Element {

    this.componentRef = this.componentFactoryResolver.resolveComponentFactory(component.component).create(this.injector);

    this.componentRef.instance.modal = this;

    this.appRef.attachView(this.componentRef.hostView);

    return (this.componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
  }

  open(component: any): void {

    const alertElement = this.createFormModal(component);

    const content = document.createElement('div');
    content.classList.add('modal');
    content.appendChild(alertElement);

    this.modalContainer = document.createElement('div');
    this.modalContainer.classList.add('modal');
    this.modalContainer.appendChild(content);

    document.body.appendChild(this.modalContainer);
  }

  close(): void {
    this.appRef.detachView(this.componentRef.hostView);
    this.modalContainer.parentNode.removeChild(this.modalContainer);
    this.componentRef.destroy();
    if (this.confirmSub) {
      this.confirmSub.unsubscribe();
    }
  }

  confirm(): void {
    this.isConfirmed.next(true);
    this.componentRef.destroy();
    this.isConfirmed.next(false);
    if (this.confirmSub) {
      this.confirmSub.unsubscribe();
    }
  }
}
