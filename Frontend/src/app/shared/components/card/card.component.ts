import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { range } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IGuion } from './card.metadata';
import { CommonModule } from '@angular/common';

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
}
