import { Component } from '@angular/core';
import { PageComponent } from '../../../shared/components/page/page.component';
import { CommunicationService } from '../../../core/services/comunicacion/comunnication.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-guion',
  standalone: true,
  imports: [PageComponent],
  templateUrl: './guion.component.html',
  styleUrls: ['./guion.component.scss']
})
export class GuionComponent {
  constructor(private communicationService: CommunicationService) {
  

    this.communicationService.triggerTextbox$.subscribe((message: string) => {

      console.log("");
    });
  }

}
