import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [RouterLink, FormsModule, ReactiveFormsModule, CommonModule, HttpClientModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {
  @Output() close = new EventEmitter<void>();

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
      descripcion: new FormControl("", [Validators.required]),
      genero: new FormControl("", [Validators.required])  
    });
    
  }

  onSubmit() {
    if (this.guionForm.valid) {
      this.guionObj.titulo = this.guionForm.value.username;
      this.guionObj.descripcion = this.guionForm.value.password;

      this.http.post('http://localhost:3000/auth/inicio-sesion', this.guionObj).subscribe(
        (res: any) => {
          console.log(res)
          if (res.message="Inicio de sesion exitoso") {
            this.errorMessage = null;
          } else {
            this.errorMessage = res.message;
          }
        },
        (error) => {
          this.errorMessage = 'Usuario o contraseña incorrecta';
        }
      );
    } else {
      this.errorMessage = 'Llene todos los campos del formulario';
    }
  }
}

export class Guion {
  titulo: string;
  descripcion: string;

  constructor() {
    this.titulo = '';
    this.descripcion = '';
  }
}
