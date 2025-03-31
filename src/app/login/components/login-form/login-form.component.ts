import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { Auth } from '../../../Interfaces/auth.interface';
import { TokenService } from 'src/app/Services/token.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

  loginForm: FormGroup;
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private authService: LoginService,
    private router: Router,
    private tokenService: TokenService
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  login(): void {
    if (this.loginForm.invalid) {
      return;
    }

    const auth:Auth = this.loginForm.value;
    this.authService.login(auth).subscribe({
      next: (response) => {
        this.tokenService.setToken(response.token)
        this.router.navigate(['/home']);
      },
      error: (error) => {
        this.errorMessage = 'Credenciales incorrectas';
        console.error('Error de login', error);
      }
    });
  }
}
