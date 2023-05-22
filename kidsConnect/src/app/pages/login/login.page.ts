import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss']
})
export class LoginPage {
  rut: string = '';
  password: string = '';

  constructor(private router: Router, private dbService: DbService) { }

  validarUsuario() {
    const datosValidos = this.dbService.validarCredenciales(this.rut, this.password);

    if (datosValidos) {
      // Los datos son válidos, redirigir a la página principal
      this.router.navigate(['/principal']);
    } else {
      // Los datos son inválidos
      console.log('Datos inválidos');
    }
  }

  Ir_recuperar() {
    this.router.navigate(['/recuperar-pass']);
  }

  ir_login() {
    this.router.navigate(['/principal']);
  }

}
