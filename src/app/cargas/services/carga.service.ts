import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Response } from 'src/app/Interfaces/response.interface';
import { Carga } from 'src/app/Interfaces/carga.interface';
import { TokenService } from 'src/app/Services/token.service';


@Injectable({
  providedIn: 'root'
})
export class CargaService {
  private apiUrl = `${environment.apiUrl}/cargas`;

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

  getCargas(): Observable<Response<Carga[]>> {
    return this.http.get<Response<Carga[]>>(this.apiUrl, this.getHeaders());
  }

  getBuqueById(id: number): Observable<Response<Carga>> {
      return this.http.get<Response<Carga>>(`${this.apiUrl}/${id}`, this.getHeaders());
    }

  addCarga(carga: Carga): Observable<Response<Carga>> {
    return this.http.post<Response<Carga>>(this.apiUrl, carga, this.getHeaders());
  }

  updateCarga(carga: Carga): Observable<Response<Carga>> {
    return this.http.put<Response<Carga>>(`${this.apiUrl}/${carga.id}`, carga, this.getHeaders());
  }

  deleteCarga(id: number): Observable<Response<null>> {
    return this.http.delete<Response<null>>(`${this.apiUrl}/${id}`, this.getHeaders());
  }
}
