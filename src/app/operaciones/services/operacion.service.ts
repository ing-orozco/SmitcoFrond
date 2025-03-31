import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from 'src/app/Services/token.service';
import { Response } from 'src/app/Interfaces/response.interface';
import { Operacion } from 'src/app/Interfaces/operacion.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OperacionService {
  private apiUrl = `${environment.apiUrl}/operaciones`;

  constructor(
    private http: HttpClient,
    private tokenService: TokenService
  ) {}

  private getHeaders() {
    const token = this.tokenService.getToken();
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }

    return { headers };
  }

  getOperaciones(): Observable<Response<Operacion[]>> {
    return this.http.get<Response<Operacion[]>>(this.apiUrl, this.getHeaders());
  }

  getOperacionById(id: number): Observable<Response<Operacion>> {
    return this.http.get<Response<Operacion>>(`${this.apiUrl}/${id}`, this.getHeaders());
  }

  addOperacion(operacion: Operacion): Observable<Response<Operacion>> {
    return this.http.post<Response<Operacion>>(this.apiUrl, operacion, this.getHeaders());
  }

  updateOperacion(operacion: Operacion): Observable<Response<Operacion>> {
    return this.http.put<Response<Operacion>>(`${this.apiUrl}/${operacion.id}`, operacion, this.getHeaders());
  }

  deleteOperacion(id: number): Observable<Response<void>> {
    return this.http.delete<Response<void>>(`${this.apiUrl}/${id}`, this.getHeaders());
  }
}
