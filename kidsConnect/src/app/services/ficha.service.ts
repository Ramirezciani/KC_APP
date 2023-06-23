import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FichaService {
  private apiUrl = 'http://tmp.enred.cl/html/kc/rest/test_ficha.php';

  constructor(private http: HttpClient) { }

  buscarHistorialFicha(rutAlumno: string): Observable<any> {
    const url = `${this.apiUrl}?nombreFuncion=buscarHistorialFicha&rut_alumno=${rutAlumno}`;
    return this.http.get(url);
  }
}
