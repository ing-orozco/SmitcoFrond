import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthResponse } from 'src/app/Interfaces/auth-response.interface';
import { Auth } from 'src/app/Interfaces/auth.interface';
import { TokenService } from 'src/app/Services/token.service';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = `${environment.apiUrl}/auth`;

  constructor(
    private http: HttpClient,
    private tokenService: TokenService
  ) {}

  login(auth:Auth): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/login`, auth);
  }

  logout(): void {
    this.tokenService.removeToken();
  }

  isAuthenticated(): boolean {
    return this.tokenService.isAuthenticated();
  }
}
