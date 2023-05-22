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

  login() {
    
  }

  // validateCredentials() {
  //   this.dbService.validateCredentials(this.rut, this.password)
  //     .then((valid: boolean) => {
  //       if (valid) {
  //         // Datos válidos, redirigir a la página principal
  //         this.router.navigate(['/principal']);
  //       } else {
  //         // Datos inválidos, mostrar mensaje de error o tomar acciones adicionales
  //         console.log('Datos inválidos');
  //       }
  //     })
  //     .catch((error: any) => {
  //       // Error en la validación de las credenciales, mostrar mensaje de error o tomar acciones adicionales
  //       console.log('Error en la validación de las credenciales:', error);
  //     });
  // }

  cancelar() {
    // Acción del botón Cancelar
    console.log('Cancelar');
  }

  Ir_recuperar() {
    this.router.navigate(['/recuperar-pass']);
  }
}
