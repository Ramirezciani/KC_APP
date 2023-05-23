import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DbService } from 'src/app/services/db.service';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss']
})
export class LoginPage {
  rut: string = '';
  password: string = '';
  public alertButtons = ['OK'];

  constructor(private router: Router, private http:HttpClient, private alert:AlertController) { }

  cancelar() {
    // Acción del botón Cancelar
    console.log('Cancelar');
  }

login() {
  if (!this.rut || !this.password) {
    // Verificar si los campos de rut y contraseña están vacíos
    this.presentAlert('Alerta', 'Campos vacíos', 'Por favor ingrese su rut y contraseña.');
    return;
  }

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
      this.presentAlert('Error', 'Inicio de sesión fallido', 'Por favor verifique su rut y contraseña.');
    }
  );
}

presentAlert(header: string, subHeader: string, message: string) {
  const alert = document.createElement('ion-alert');
  alert.header = header;
  alert.subHeader = subHeader;
  alert.message = message;
  alert.buttons = [
    {
      text: 'OK',
      handler: () => {
        console.log('Botón OK presionado');
      }
    }
  ];

  document.body.appendChild(alert);
  return alert.present();
}
  

  Ir_recuperar() {
    this.router.navigate(['/recuperar-pass']);
  }
}
