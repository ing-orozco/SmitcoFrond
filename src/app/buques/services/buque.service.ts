import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import { environment } from 'src/environments/environment';
import { Buque} from 'src/app/Interfaces/buque.interface';
import { Response } from 'src/app/Interfaces/response.interface';
import { TokenService } from '../../Services/token.service';

@Injectable({
  providedIn: 'root'
})
export class BuqueService {
  private apiUrl = `${environment.apiUrl}/buques`;

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

  getBuques(): Observable<Response<Buque[]>> {
    return this.http.get<Response<Buque[]>>(this.apiUrl, this.getHeaders());
  }

  getBuqueById(id: number): Observable<Response<Buque>> {
    return this.http.get<Response<Buque>>(`${this.apiUrl}/${id}`, this.getHeaders());
  }

  addBuque(buque: Buque): Observable<Response<Buque>> {
    return this.http.post<Response<Buque>>(this.apiUrl, buque, this.getHeaders());
  }

  updateBuque(buque: Buque): Observable<Response<Buque>> {
    return this.http.put<Response<Buque>>(`${this.apiUrl}/${buque.id}`, buque, this.getHeaders());
  }

  deleteBuque(id: number): Observable<Response<null>> {
    return this.http.delete<Response<null>>(`${this.apiUrl}/${id}`, this.getHeaders());
  }
}
