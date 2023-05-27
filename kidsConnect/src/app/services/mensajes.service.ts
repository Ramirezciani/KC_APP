import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MensajeService {
  private apiUrl = 'https://tmp.enred.cl/rest/mensajes.php'; // Reemplaza la URL con la ubicación de tu script PHP

  constructor(private http: HttpClient) {}

  buscarPorDocentes(rut: string): Observable<any> {
    const encodedRut = encodeURIComponent(rut);
    const url = `${this.apiUrl}?nombreFuncion=buscarDocentePorRut&rut_participante=${encodedRut}`;
    return this.http.get(url);
  }

}