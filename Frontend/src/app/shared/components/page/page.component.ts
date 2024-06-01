import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IOrderItem } from '../../../modules/editor/guion-component/order.metadata';

@Component({
  selector: 'app-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent {

  @Input() textos: any[] = []

  autoGrow(event: Event) {
    const target = event.currentTarget as HTMLTextAreaElement;
    target.style.height = 'auto';
    target.style.height = target.scrollHeight + 'px';
  }
  
}