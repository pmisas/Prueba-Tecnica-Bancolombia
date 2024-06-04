import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {

  private triggerTextboxSource = new Subject<string>();
  private focusedElement = new Subject<string>();

  triggerTextbox$ = this.triggerTextboxSource.asObservable();

  focusedTextbox$ = this.focusedElement.asObservable();

  //recibe el mensaje y con .next lo lleva al observable
  triggerTextbox(message: string) {
    this.triggerTextboxSource.next(message);
  }

  focusElement(element: string) {
    this.focusedElement.next(element)
  }

}
