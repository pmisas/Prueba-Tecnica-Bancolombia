import { Component, Inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, FormsModule, ReactiveFormsModule, CommonModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})

export class LoginComponent {

  loginForm: FormGroup;
  errorMessage: string | null = null;
  
  constructor(private http: HttpClient, private router: Router, @Inject(DOCUMENT) private document: Document) {
    // Verifica si `localStorage` está disponible
    const localStorage = this.document.defaultView?.localStorage;
    
    this.loginForm = new FormGroup({
      username: new FormControl('paula', [Validators.required, Validators.minLength(5), Validators.maxLength(30)]),
      password: new FormControl('123', [Validators.required]),
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const loginObj = {
        username: this.loginForm.value.username,
        password: this.loginForm.value.password
      };
      console.log("holiii1")
      this.http.post('http://localhost:3000/auth/inicio-sesion', loginObj).subscribe({
        next: (res: any) => {
          if (res.token) {
            this.errorMessage = null;
            console.log("holiii")
            // Verificar nuevamente si localStorage está disponible
            if (this.document.defaultView?.localStorage) {
              console.log('Guardando token en localStorage');
              this.document.defaultView.localStorage.setItem('authToken', res.token);
            }
            
            this.router.navigate(['/dashboard']);
          } else {
            this.errorMessage = res.message;
          }
        },
        error: () => {
          this.errorMessage = 'Usuario o contraseña incorrecta';
        }
      });
    } else {
      this.errorMessage = 'Llene todos los campos del formulario';
    }
  }
}
