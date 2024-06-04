import { AfterViewInit, Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CommunicationService } from '../../../core/services/comunicacion/comunnication.service';

@Component({
  selector: 'app-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit{

  constructor(private communicationService: CommunicationService){}

  @ViewChildren('inputElement') inputElements!: QueryList<ElementRef>;

  lastFocusedElement: HTMLElement | undefined;


  @HostListener('document:focusin', ['$event'])
  onFocus(event: FocusEvent) {
    this.lastFocusedElement = event.target as HTMLElement;
  }

  @HostListener('document:click', ['$event'])
  handleClick(event: MouseEvent) {
    // Si el clic no fue dentro de un input o textarea, volvemos a enfocar el último elemento
    if (!this.isInputElement(event.target) && !this.isTextAreaElement(event.target)) {
      if (this.lastFocusedElement) {
        this.lastFocusedElement.focus();
      }
    }
  }

  isInputElement(target: any): boolean {
    return target instanceof HTMLInputElement;
  }

  isTextAreaElement(target: any): boolean {
    return target instanceof HTMLTextAreaElement;
  }

  sendSignal() {
    const element = this.textos[this.focusedIndex!].title
    this.communicationService.focusElement(element)
  }


  ngOnInit() {
    this.communicationService.triggerTextbox$.subscribe( message => {
      this.envio(this.focusedIndex, message)
    })
  }

  focusedIndex: number | null = null

  @Input() textos: any[] = []
  @Output() focus = new EventEmitter<{ index: number | null, message: string }>();
  @Output() eliminar = new EventEmitter<number>();


  autoGrow(event: Event) {
    const target = event.currentTarget as HTMLTextAreaElement;
    target.style.height = 'auto';
    target.style.height = target.scrollHeight + 'px';
  }

  adjustWidth(event: any) {
    const input = event.target;
    input.style.width = (input.value.length + 1) * 8.5 + 'px'; 
  }

  updateFocusedIndex(index: number | null) {
    this.focusedIndex = index;
    this.sendSignal()
  }

  envio(index: number | null, message: string) {
    this.focus.emit({ index: index, message: message });
  }

  

  borrado(event: KeyboardEvent, index: number) {
    const input = event.target as HTMLInputElement || event.target as HTMLTextAreaElement
    if (event.key === 'Backspace' && input.value === '' && index !== 0) {
      this.eliminar.emit(index);
      console.log("se borra", index)
    }
  }
  
}