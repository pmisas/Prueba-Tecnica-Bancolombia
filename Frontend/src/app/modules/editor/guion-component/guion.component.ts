import { Component, OnInit } from '@angular/core';
import { PageComponent } from '../../../shared/components/page/page.component';
import { IEscena, IOrderItem } from './order.metadata';
import { CommonModule } from '@angular/common';
import { CommunicationService } from '../../../core/services/comunicacion/comunnication.service'; 

@Component({
  selector: 'app-guion',
  standalone: true,
  imports: [PageComponent, CommonModule],
  templateUrl: './guion.component.html',
  styleUrls: ['./guion.component.scss']
})
export class GuionComponent implements OnInit {

  constructor(private comunicationService: CommunicationService) {}

  orderItems: any[] = [];
  paginas: any[][] = [[]];
  escena = 1;
  focus: number | null = null;
  maxItemsPerPage = 7;

  ngOnInit() {
    if (this.orderItems.length === 0) {
      this.addOrderItem('Escena');
    }
  
    this.comunicationService.triggerTextbox$.subscribe(message => {
      this.focus! += 1;
      this.addOrderItem(message);
    })
  }

  addOrderItem(message: string) {
    let newItem: IOrderItem | IEscena | null = null;

    if (message === 'Dialogo') {
      newItem = { content: '', title: message, character: '' } as IOrderItem;
    } else if (message === 'Notacion' && this.orderItems.length > 0) {
      const focusedItem = this.orderItems[this.focus!];
      if (focusedItem?.title === 'Dialogo' && !focusedItem.notation) {
        focusedItem.notation = '';
      }
    } else if (message === 'Escena') {
      newItem = { title: message, espacio: '', ubicacion: '', momento: '' } as IEscena;
      this.escena += 1;
    } else {
      newItem = { content: '', title: message } as IOrderItem;
    }

    if (newItem) {
      this.addItemToPage(newItem);
    }

    if (this.orderItems.length === 0) {
      this.orderItems.push(newItem);
    } else if (message !== 'Notacion') {
      const index = this.focus! + 1;
      this.orderItems.splice(index, 0, newItem);
    }

    console.log(this.orderItems);
    console.log(this.paginas);
  }

  addItemToPage(item: any) {
    const lastPage = this.paginas[this.paginas.length - 1]; // Última página actual

    if (lastPage.length < this.maxItemsPerPage) {
      lastPage.push(item); // Si la página tiene menos de 7 elementos, agregamos
    } else {
      this.paginas.push([item]); // Si ya tiene 7 elementos, creamos una nueva página
    }
  }

  nuevofocus(event: { focus: number | null, message: string }) {
    this.focus = event.focus;
    this.addOrderItem(event.message);
  }

  eliminar(event: { index: number, property?: string }) {
    const item = this.orderItems[event.index];
    
    // Eliminar el item de orderItems
    this.orderItems.splice(event.index, 1);

    // Eliminar de las páginas
    this.eliminarDePaginas(item);
  }

  eliminarDePaginas(item: any) {
    for (let i = 0; i < this.paginas.length; i++) {
      const pagina = this.paginas[i];
      const indexInPage = pagina.indexOf(item);

      if (indexInPage !== -1) {
        // Eliminar el elemento de la página
        pagina.splice(indexInPage, 1);

        // Reajustar las páginas si es necesario
        if (pagina.length < this.maxItemsPerPage && this.paginas[i + 1]) {
          const nextPage = this.paginas[i + 1];
          const firstItemOfNextPage = nextPage.shift();

          if (firstItemOfNextPage) {
            pagina.push(firstItemOfNextPage); 
          }

          if (nextPage.length === 0) {
            this.paginas.splice(i + 1, 1); 
          }
        }
        break;
      }
    }
  }
}
