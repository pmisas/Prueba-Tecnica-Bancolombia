import { Component, OnInit } from '@angular/core';
import { PageComponent } from '../../../shared/components/page/page.component';
import { CommunicationService } from '../../../core/services/comunicacion/comunnication.service';
import { IEscena, IOrderItem } from './order.metadata';


@Component({
  selector: 'app-guion',
  standalone: true,
  imports: [PageComponent],
  templateUrl: './guion.component.html',
  styleUrls: ['./guion.component.scss']
})
export class GuionComponent implements OnInit{

  constructor(private communicationService: CommunicationService) {
    if (this.orderItems.length === 0 ) {
      this.addOrderItem("Escena")
    }
  }

  orderItems: any[] = [];
  escenaItems: IEscena[] = [];
  order = 1
  escena = 1

  ngOnInit() {
    this.communicationService.triggerTextbox$.subscribe(message => {
      this.addOrderItem(message);
    });
  }

  addOrderItem(message: string) {

    if (["Dialogo", "Posicion", "Pose"].includes(message)) {
      const newItem: IOrderItem = { content:"", order:this.order, title:message, character: ""};
      this.orderItems.push(newItem);  
    }

    else if (message === "Notacion"){
      if (this.orderItems.length > 0) {
        const index = this.orderItems.length - 1;
        const item = this.orderItems[index];
        if (!item.hasOwnProperty('notation')) {
          item.notation = "";
      }

      }
    }

    else if (message === "Escena") {
      const newItem: IEscena = { title:message, espacio:"", ubicacion:"", momento:"", order:this.order }
      this.orderItems.push(newItem);
      this.escena += 1
      this.order = 1
    }

    else {
      const newItem: IOrderItem = { content:"", order:this.order, title:message};
      this.orderItems.push(newItem); 
    }

    

    this.order += 1;
    console.log(this.orderItems);

  }

}
