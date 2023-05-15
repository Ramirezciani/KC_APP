import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DbService {
  private apiURL = 'http://tmp.enred.cl/rest/login.php';

  constructor(private router: Router, private http: HttpClient) { }

  canActivate(): Observable<boolean> {
    const rut_user = ''; // Obtén el valor del campo de usuario de tu formulario
    const pass_user = ''; // Obtén el valor del campo de contraseña de tu formulario

    return this.validarUsuario(rut_user, pass_user).pipe(
      tap(response => console.log('Respuesta del servidor:', response)),
      catchError(error => {
        console.error('Error al llamar a la API:', error);
        return of(null); // Devuelve un observable nulo para que la suscripción pueda continuar
      }),
      map(response => {
        if (response && response.success) {
          // Los datos de inicio de sesión son válidos, redirige a la página principal
          this.router.navigate(['/principal']);
          return false;
        } else {
          // Los datos de inicio de sesión son inválidos, permite el acceso
          return true;
        }
      })
    );
  }

  validarUsuario(rut_user: string, pass_user: string): Observable<any> {
    const body = {
      function: 'validarUsuario',
      rut_user: rut_user,
      pass_user: pass_user
    };

    return this.http.post(this.apiURL, body).pipe(
      tap(response => console.log('Respuesta del servidor:', response)),
      catchError(error => {
        console.error('Error al llamar a la API:', error);
        return of({ success: false }); // Devuelve una respuesta falsa en caso de error
      }),
      map((response: any) => {
        if (response && response.function === 'validarUsuario') {
          // La función de inicio de sesión existe en el archivo PHP
          if (response.success === 'true') {
            // El inicio de sesión fue exitoso
            return { success: true };
          } else {
            // El inicio de sesión falló
            return { success: false };
          }
        } else {
          // La función de inicio de sesión no existe en el archivo PHP
          console.error('La función de inicio de sesión no es válida.');
          return { success: false };
        }
      })
    );
  }
}
