import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {
  private triggerTextboxSource = new Subject<string>();

  // Observable string streams
  triggerTextbox$ = this.triggerTextboxSource.asObservable();

  // Service message commands
  triggerTextbox(message: string) {
    console.log(message)
    this.triggerTextboxSource.next(message);
  }
}
