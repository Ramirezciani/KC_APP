import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MensajeService {
  private apiUrl = 'http://tmp.enred.cl/kc/rest/mensajes.php';

  constructor(private http: HttpClient) {}

  buscarPorNombre(nombre: string): Observable<any> {
    const encodedNombre = encodeURIComponent(nombre);
    const url = `${this.apiUrl}?nombreFuncion=obtenerDocentes&nombre=${encodedNombre}`;
    return this.http.get(url);
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
