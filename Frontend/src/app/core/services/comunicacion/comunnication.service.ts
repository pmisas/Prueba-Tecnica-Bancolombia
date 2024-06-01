import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {
  // el todo lo que emite el observable lo escuchan los subscriptores
  private triggerTextboxSource = new Subject<string>();

  triggerTextbox$ = this.triggerTextboxSource.asObservable();

  //recibe el mensaje y con .next lo lleva al observable
  triggerTextbox(message: string) {
    this.triggerTextboxSource.next(message);
  }

}
