import { AfterViewInit, AfterViewChecked, Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output, QueryList, ViewChildren } from '@angular/core';
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
export class PageComponent implements OnInit, AfterViewInit, AfterViewChecked {

  constructor(private communicationService: CommunicationService) { }

  @ViewChildren('inputElement') inputElements!: QueryList<ElementRef>;

  lastFocusedElement: HTMLElement | undefined;

  @Input() textos: any[] = [];
  @Input() pageNumber: number | undefined;
  focusedIndex: number | null = null;
  autoFocusIndex: number | null = null;

  ngAfterViewInit(): void {
    if (this.lastFocusedElement) {
      this.lastFocusedElement.focus();
    }
  }

  ngAfterViewChecked(): void {
    if (this.autoFocusIndex !== null) {
      const element = this.inputElements.toArray()[this.autoFocusIndex];
      if (element) {
        element.nativeElement.focus();
        this.updateFocusedIndex(this.autoFocusIndex)
        this.autoFocusIndex = null;
      }
    }
  }

  autofocus(index: number): void {
    this.autoFocusIndex = index;
  }

  @HostListener('document:focusin', ['$event'])
  onFocus(event: FocusEvent) {
    this.lastFocusedElement = event.target as HTMLElement;
  }

  @HostListener('document:click', ['$event'])
  handleClick(event: MouseEvent) {
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

  /*
    aqui se manda la señal a la barra de navegacion de en cual input se esta parado
    para saber si debe activar notacion
  */
  sendSignal() {
    const element = this.textos[this.focusedIndex!].title;
    this.communicationService.focusElement(element);
  }

  ngOnInit() {
    /*
    this.communicationService.triggerTextbox$.subscribe(message => {
      this.envio(this.focusedIndex, message);
      if (message !== "Notacion") {
        this.autofocus(this.focusedIndex! + 1);
      }
    });
    */
  }

  @Output() focus = new EventEmitter<{ index: number | null, message: string }>();
  @Output() eliminar = new EventEmitter<{ index: number, property?: string }>();

  autoGrow(event: Event) {
    const target = event.currentTarget as HTMLTextAreaElement;
    target.style.height = 'auto';
    target.style.height = target.scrollHeight + 'px';
  }

  adjustWidth(event: any) {
    const input = event.target;
    input.style.width = (input.value.length + 1) * 8.5 + 'px';
  }

  //aqui se cambia la posicion de donde esta el mouse de escritura y se manda al apdre
  updateFocusedIndex(index: number | null) {
    this.focusedIndex = index;
    this.sendSignal();
  }

  /* 
  se manda el nuevo mensaje de boton para poner el la lista 
  junto con el indice en el cual se debe poner
  */
  envio(index: number | null, message: string) {
    this.focus.emit({ index: index, message: message });
  }


  borrado(event: KeyboardEvent, index: number, property?: string) {
    const input = event.target as HTMLInputElement || event.target as HTMLTextAreaElement;
    if (event.key === 'Backspace' && input.value.trim() === '' && index !== 0) {
      event.preventDefault();
      this.eliminar.emit({index: index, property: property});
      if (this.textos.length === index) {
        this.autofocus(this.focusedIndex! - 1);
      }else {
        this.autofocus(this.focusedIndex!);
      }
    }
  }

}
