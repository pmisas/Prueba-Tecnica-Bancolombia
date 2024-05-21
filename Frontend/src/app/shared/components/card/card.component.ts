import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { range } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IGuion } from './card.metadata';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() guion:IGuion | undefined
  @Output() emptyCardClicked = new EventEmitter<void>();
  @Output() deleteCardClicked = new EventEmitter<number>();

  constructor(private router: Router) {}

  onDeleteClicked(): void {
    if (this.guion && this.guion.id) {
      this.deleteCardClicked.emit(this.guion.id);
    }
  }

  onEditClicked(): void {
    if (this.guion && this.guion.id) {
      this.router.navigate([`/dashboard/editor/${this.guion.id}`]); // Navega a la ruta especificada
    }
  }

}
