import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, FormsModule, ReactiveFormsModule, CommonModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})

export class LoginComponent {

  
  loginObj: Login;
  loginForm: FormGroup;
  errorMessage: string | null = null;

  constructor(private http: HttpClient, private router: Router) {  
    this.loginObj = new Login();
    
    this.loginForm = new FormGroup({
      username: new FormControl("", [Validators.required, Validators.minLength(5), Validators.maxLength(30)]),
      password: new FormControl("", [Validators.required]),
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.loginObj.username = this.loginForm.value.username;
      this.loginObj.password = this.loginForm.value.password;

      this.http.post('http://localhost:3000/auth/inicio-sesion', this.loginObj).subscribe(
        (res: any) => {
          console.log(res)
          if (res.message="Inicio de sesion exitoso") {
            this.errorMessage = null;
            this.router.navigate(['/auth/login']);
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


export class Login {
  username: string;
  password: string;

  constructor() {
    this.username = '';
    this.password = '';
  }
}

