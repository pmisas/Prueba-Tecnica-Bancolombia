import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';  // Importa Router
import { FormGroup, ReactiveFormsModule, FormsModule, FormControl, Validators } from '@angular/forms';
import { RadioButtonModule } from '@syncfusion/ej2-angular-buttons';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink, RadioButtonModule, FormsModule, ReactiveFormsModule, CommonModule, HttpClientModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  registerObj: Register;
  registerForm: FormGroup;
  errorMessage: string | null = null;

  constructor(private http: HttpClient, private router: Router) {  
    this.registerObj = new Register();
    
    this.registerForm = new FormGroup({
      username: new FormControl("", [Validators.required, Validators.minLength(5), Validators.maxLength(30)]),
      password: new FormControl("", [Validators.required]),
      role: new FormControl("", [Validators.required]),
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      this.registerObj.username = this.registerForm.value.username;
      this.registerObj.password = this.registerForm.value.password;
      this.registerObj.rol = this.registerForm.value.role;

      this.http.post('http://localhost:3000/auth/registro', this.registerObj).subscribe(
        (res: any) => {
          if (res.message="usuario registrado con exito") {
            this.errorMessage = null;
            this.router.navigate(['/auth/login']);
          } else {
            this.errorMessage = res.message;
          }
        },
        (error) => {
          this.errorMessage = 'No se pudo registrar, intente de nuevo';
        }
      );
    } else {
      this.errorMessage = 'Llene todos los campos del formulario';
    }
  }

}

export class Register {
  username: string;
  password: string;
  rol: string;

  constructor() {
    this.username = '';
    this.password = '';
    this.rol = '';
  }
}
