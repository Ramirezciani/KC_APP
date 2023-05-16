import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DbService {
  private apiURL = 'http://tmp.enred.cl/rest/login.php';

  constructor(private router: Router, private http: HttpClient) { }

  canActivate(): Promise<boolean> {
    const credentials = this.retrieveCredentialsFromStorage();
    if (credentials) {
      return this.validateCredentials(credentials.rut, credentials.password);
    } else {
      // Credenciales no encontradas, redirigir al login
      this.router.navigate(['/login']);
      return Promise.resolve(false);
    }
  }

  validateCredentials(rut: string, password: string): Promise<boolean> {
    const credentials = {
      rut: rut,
      password: password
    };

    return this.http.post<any>(this.apiURL, credentials).toPromise()
      .then(response => {
        if (response && response.message === 'Datos válidos') {
          console.log(response); // Las credenciales son válidas
          return true;
        } else {
          // Las credenciales son inválidas, redirigir al login
          this.router.navigate(['/login']);
          return false;
        }
      })
      .catch(error => {
        // Error en la petición o en la validación de las credenciales
        console.log('Error en la validación de las credenciales:', error);
        // Redirigir al login
        this.router.navigate(['/login']);
        return false;
      });
  }

  retrieveCredentialsFromStorage(): { rut: string, password: string } | null {
    // Implementa la lógica para recuperar las credenciales almacenadas, por ejemplo, desde el almacenamiento local
    // Retorna un objeto con las credenciales { rut, password } o null si no se encontraron
    return null;
  }
}
