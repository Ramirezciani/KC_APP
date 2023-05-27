import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MensajeService {
  private apiUrl = 'http://tmp.enred.cl/rest/buzon.php'; // Reemplaza la URL con la ubicación de tu script PHP

  constructor(private http: HttpClient) {}

  enviarMensaje(mensaje: any) {
    return this.http.post<any>(this.apiUrl, mensaje);
  }
}