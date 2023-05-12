import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  constructor(private router: Router, private http: HttpClient) { }
  
  private apiURL = 'http://tmp.enred.cl/rest/get_user_pass.php';

  async canActivate(idUser: string, password: string): Promise<boolean> {
    const queryParams = `?id_user=${idUser}&pass=${password}`;

    return this.http.get<any>(this.apiURL + queryParams)
      .toPromise()
      .then(response => {
        // Validar la respuesta de la API
        if (response && response.valid) {
          // Credenciales válidas
          return true;
        } else {
          // Credenciales inválidas
          return false;
        }
      })
      .catch(error => {
        console.error('Error en la solicitud de inicio de sesión:', error);
        return false;
      });
  }
}
