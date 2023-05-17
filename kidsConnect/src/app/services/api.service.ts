import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private objetoAlumno: any = {};

  private apiUrl = 'http://tmp.enred.cl/rest/get_ficha_id.php';
  
  constructor(private http: HttpClient) {}

  obtenerMensajesAll(): Observable<any> {
    const url = 'http://tmp.enred.cl/rest/get_mensaje.php';
    return this.http.get(url);
  }
  // obtenerRegiones(): Observable<any> {
  //   return this.http.get('http://tmp.enred.cl/get_region.php');
  // }

  buscarFichaPorRut(rutAlumno: string): Observable<any> {
    const encodedRut = encodeURIComponent(rutAlumno);
    const url = `${this.apiUrl}?nombreFuncion=buscarFichaPorRut&rut_alumno=${encodedRut}`;
    return this.http.get(url);
  }




  }
