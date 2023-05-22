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

  cancelar() {
    // Acción del botón Cancelar
    console.log('Cancelar');
  }

  Ir_recuperar() {
    this.router.navigate(['/recuperar-pass']);
  }
}
