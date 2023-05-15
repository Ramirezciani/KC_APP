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
    return this.http.post<any>(`${this.apiURL}/login`, { rut, password }).toPromise()
      .then(response => {
        // Los datos son válidos, permitir el acceso
        return true;
      })
      .catch(error => {
        // Los datos son inválidos, redirigir al login
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
