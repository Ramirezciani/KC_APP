import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss']
})
export class LoginPage {
  rut: string = '';
  password: string = '';

  constructor(private router: Router, private http:HttpClient) { }

  cancelar() {
    // Acción del botón Cancelar
    console.log('Cancelar');
  }

  login() {
    const data = {
      rut: this.rut,
      password: this.password,
    };

    this.http.post('https://tmp.enred.cl/kc/rest/login.php', data).subscribe(
      (response: any) => {
        // El inicio de sesión fue exitoso
        console.log('Inicio de sesión exitoso');
        this.router.navigate(['/principal']);
      },
      (error) => {
        // Hubo un error en el inicio de sesión
        console.error('Error en el inicio de sesión', error);
        // Aquí puedes mostrar un mensaje de error al usuario o realizar alguna otra acción necesaria.
      }
    );
  }

  Ir_recuperar() {
    this.router.navigate(['/recuperar-pass']);
  }
}
