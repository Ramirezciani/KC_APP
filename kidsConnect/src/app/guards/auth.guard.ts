import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { DbService } from '../services/db.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private dbService: DbService) {}

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    // Verificar si el usuario está autenticado utilizando el servicio DbService
    if (this.dbService.isAuthenticatedUser()) {
      return true; // El usuario tiene acceso a la ruta
    } else {
      this.router.navigate(['/login']); // Redirigir al usuario a la página de inicio de sesión
      return false; // El usuario no tiene acceso a la ruta
    }
  }
}
