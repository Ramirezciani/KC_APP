import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { DbService } from '../services/db.service';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private dbService: DbService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    
    const rut_user = ''; // Obtén el valor del campo de usuario de tu formulario
    const pass_user = ''; // Obtén el valor del campo de contraseña de tu formulario

    return this.dbService.validarUsuario(rut_user, pass_user).pipe(
      map(response => {
        if (response && response.success) {
          // Los datos de inicio de sesión son válidos
          return true;
        } else {
          // Los datos de inicio de sesión son inválidos, redirige al componente de inicio de sesión
          this.router.navigate(['/login']);
          return false;
        }
      }),
      catchError(error => {
        console.error('Error al llamar a la API:', error);
        return of(false);
      })
    );
  }
}
