import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private objetoAlumno: any = {};

  private api = 'http://tmp.enred.cl/kc/rest/post_mensaje.php';

  private apiUrl = 'http://tmp.enred.cl/kc/rest/get_ficha_id.php';
  
  constructor(private http: HttpClient) {}

  obtenerMensajesAll(): Observable<any> {
    const url = 'http://tmp.enred.cl/kc/rest/get_mensaje.php';
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

  enviarMensaje(data:any){
    return this.http.post<any>(`${this.apiUrl}`, data);
  }

    //Actualizar usuario

    private baseUrl = 'http://tmp.enred.cl/kc/rest'; // Reemplaza con la URL base de tu API


    actualizarUsuario(rutUser: string, passUser: string) {
      const url = `${this.baseUrl}/put_password.php`;
      const body = { rut_user: rutUser, pass_user: passUser };
    
      return this.http.put(url, body);
    }



  }
