import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MensajeService {
  private apiUrl = 'http://tmp.enred.cl/kc/rest/mensajes-movil.php';

  constructor(private http: HttpClient) {}

  obtenerDocentes(nombre: string): Observable<any> {
    const encodedNombre = encodeURIComponent(nombre);
    const url = `${this.apiUrl}?nombreFuncion=buscarDocentesPorNombre&nombre=${encodedNombre}`;
    return this.http.get(url).pipe(
      catchError((error) => {
        console.log('Error al buscar los docentes:', error);
        return of(null); // Devolver un observable de valor nulo en caso de error
      })
    );
  }
  
  

  enviarMensaje(rutReceptor: string, nomReceptor: string, contMensaje: string): Observable<any> {
    const url = `${this.apiUrl}`;
    const data = {
      rut_participante: rutReceptor,
      nombreParticipante: nomReceptor,
      contMensaje: contMensaje
    };
    return this.http.post(url, data);
  }
}
