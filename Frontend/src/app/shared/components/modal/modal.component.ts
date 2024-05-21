import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { IGuion } from '../card/card.metadata';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [RouterLink, FormsModule, ReactiveFormsModule, CommonModule, HttpClientModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {
  @Output() close = new EventEmitter<void>();
  @Input() token:any
  @Output() guionCreated = new EventEmitter<IGuion>();

  hideModal(): void {
    this.close.emit();
  }

  
  guionObj: Guion;
  guionForm: FormGroup;
  errorMessage: string | null = null;

  constructor(private http: HttpClient, private router: Router) {  
    this.guionObj = new Guion();
    
    this.guionForm = new FormGroup({
      titulo: new FormControl("", [Validators.required]),
      descripcion: new FormControl("", [Validators.required, Validators.maxLength(130), Validators.minLength(10)]),
      genero: new FormControl("", [Validators.required])  
    });
    
  }

  onSubmit() {
    if (this.guionForm.valid) {
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      });
  
      this.guionObj.Titulo = this.guionForm.value.titulo;
      this.guionObj.Descripcion = this.guionForm.value.descripcion;
      this.guionObj.Genero = this.guionForm.value.genero;
  
      this.http.post('http://localhost:3000/protect/guion', this.guionObj, { headers }).subscribe({
        next: (res: any) => {
          console.log('Response:', res);
          // Verificar si la respuesta incluye un id, lo que indica éxito
          if (res.id) {
            console.log('Creación de guion exitosa');
          this.guionCreated.emit(res); // Emite el guion recién creado
            this.errorMessage = null;
            this.close.emit(); // Cierra el modal si es exitoso
          } else {
            this.errorMessage = res.message || 'Error desconocido';
          }
        },
        error: (error) => {
          console.error('Error:', error);
          this.errorMessage = 'Error en la solicitud';
        }
      });
    } else {
      this.errorMessage = 'Llene todos los campos del formulario';
    }
  }
  
  
}

export class Guion {
  Titulo: string;
  Descripcion: string;
  Genero: string;

  constructor() {
    this.Titulo = '';
    this.Descripcion = '';
    this.Genero = ''
  }
}
