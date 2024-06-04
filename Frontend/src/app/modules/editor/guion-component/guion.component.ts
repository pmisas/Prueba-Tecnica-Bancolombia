  import { Component, OnInit } from '@angular/core';
  import { PageComponent } from '../../../shared/components/page/page.component';
  import { IEscena, IOrderItem, IPosicionOrderItem } from './order.metadata';


  @Component({
    selector: 'app-guion',
    standalone: true,
    imports: [PageComponent],
    templateUrl: './guion.component.html',
    styleUrls: ['./guion.component.scss']
  })
  export class GuionComponent implements OnInit{

    constructor() {
      if (this.orderItems.length === 0 ) {
        this.addOrderItem("Escena")
      }
    }

    orderItems: any[] = [];
    order = 1
    escena = 1
    focus : null | number = null

    ngOnInit() {
    }

    addOrderItem(message: string) {
      let newItem: IOrderItem | IEscena | IPosicionOrderItem | null = null;

      if (["Dialogo", "Transicion"].includes(message)) {
        newItem = { content:"", order:this.order, title:message, character: ""} as IOrderItem;
      }

      else if (message === "Notacion"){
        if (this.orderItems.length > 0) {
          console.log(this.orderItems[this.focus!].title)
          if (this.orderItems[this.focus!].title === "Dialogo"){
            const item = this.orderItems[this.focus!]
            if (!item.hasOwnProperty('notation')) {
              item.notation = "";
            }
          }
          /*
          const index = this.orderItems.length - 1;
          const item = this.orderItems[index];
          if (!item.hasOwnProperty('notation')) {
            item.notation = "";
          }
          */
        }
      }
      /*
      else if (message === "Pose"){
        if (this.orderItems.length > 0) {
          const index = this.orderItems.length - 1;
          const item = this.orderItems[index];
          if (!item.hasOwnProperty('pose')) {
            item.pose = "";
          }
        }
      }
      */

      else if (message === "Escena") {
        newItem = { title:message, espacio:"", ubicacion:"", momento:"", order:this.order } as IEscena;
        this.escena += 1
        this.order = 1
      }

      /*
      else if (message === "Posicion"){
        newItem = { 
          x:undefined , 
          y:undefined, 
          z:undefined, 
          rotacion_x:undefined, 
          rotacion_y:undefined, 
          rotacion_z:undefined,  
          order:this.order, 
          title:message, 
          character: ""
        }
        //this.order = 1
      }
      */

      else {
        newItem= { content:"", order:this.order, title:message} as IOrderItem;
      }

      console.log(newItem)
      if(this.orderItems.length === 0){
        this.orderItems.push(newItem)
      }else {
        if ( message !== "Notacion" && message !== "Pose"){
          const index = this.focus! + 1
          this.orderItems.splice(index, 0, newItem)
          for(let i = index + 1; i < this.orderItems.length; i++ ) {
            this.orderItems[i].order++;
          }
        }
      }

      this.order += 1;
      console.log(this.orderItems);
      console.log("el focus es", this.focus)

    }



    nuevofocus(event:{focus: number | null, message:string}) {
      this.focus = event.focus
      this.addOrderItem(event.message);
    }

    
    eliminar(index: number) {
      this.orderItems.splice(index, 1)
      this.order = this.order - 1
      for(let i = index; i < this.orderItems.length; i++ ) {
        this.orderItems[i].order--;
      }
    }

  }


