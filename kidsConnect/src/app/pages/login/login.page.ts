import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss']
})
export class LoginPage {

  rut: number | string = ''; // Puedes usar number o string según el tipo de dato del campo "rut" en tu formulario
  password: string = '';

  constructor(private router: Router, private dbService: DbService) {}

  login() {
    this.dbService.validarUsuario(this.rut.toString(), this.password).pipe(
      catchError((error: any) => {
        console.error('Error al llamar a la API:', error);
        return of(null); // Devuelve un observable nulo para que la suscripción pueda continuar
      })
    ).subscribe((response: any) => {
      if (response && response.success) {
        // Inicio de sesión exitoso, redirigir a la página principal
        this.router.navigate(['/principal']);
      } else {
        // Inicio de sesión fallido, mostrar mensaje de error o redirigir a la página de inicio de sesión nuevamente
      }
    }, (error: any) => {
      console.error('Error al suscribirse a la respuesta:', error);
    });
  }

  Ir_recuperar(){
    this.router.navigate(['/recuperar-pass']);
  }
}
