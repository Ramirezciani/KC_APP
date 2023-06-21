import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MensajeService {
  private apiUrl = 'http://tmp.enred.cl/kc/rest/get_docente_nombre.php';

  constructor(private http: HttpClient) {}

  // Obtener nombre docente
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
  

  //Enviar mensaje docente
  private api = 'http://tmp.enred.cl/kc/rest/buzon.php';

  
  enviarMensaje(rutEmisor: string, nomEmisor: string, rutReceptor: string, nomReceptor: string, contMensaje: string, imgMensaje: string, tipoMensaje: string): Observable<any> {
    const url = `${this.api}`;
    const data = {
      rut_emisor: rutEmisor,
      nom_emisor: nomEmisor,
      rut_receptor: rutReceptor,
      nom_receptor: nomReceptor,
      cont_mensaje: contMensaje,
      img_mensaje: imgMensaje,
      tipo_mensaje: tipoMensaje
    };
    return this.http.post(url, data);
  }

  private URL = 'http://tmp.enred.cl/kc/rest/get_mensaje_by_rut.php';

  getMensajesByRut(rut: string): Observable<any[]> {
    const url = `${this.URL}?nombreFuncion=buscarMensajesPorRut&rut_receptor=${rut}`;
    return this.http.get<any[]>(url);
  }
}
