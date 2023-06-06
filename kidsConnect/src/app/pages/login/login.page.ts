import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DbService } from 'src/app/services/db.service';
import { AlertController, LoadingController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss']
})
export class LoginPage {
  
  showPassword: boolean = false;
  rut: string = '';
  password: string = '';
  public alertButtons = ['OK'];

  constructor(private router: Router, private http:HttpClient, private alert:AlertController, 
    private loadingCtrl:LoadingController, private menuController: MenuController) { }

  cancelar() {
    console.log('Cancelar');
  
  }

  async login() {
    if (!this.rut || !this.password) {
      // Verificar si los campos de rut y contraseña están vacíos
      this.presentAlert('Alerta', 'Campos vacíos', 'Por favor ingrese su rut y contraseña.');
      return;
    }

    const loading = await this.loadingCtrl.create({
      message: 'Iniciando sesión...'
    });
    await loading.present();

    const data = {
      rut: this.rut,
      password: this.password,
    };

    this.http.post('https://tmp.enred.cl/kc/rest/login.php', data).subscribe(
      (response: any) => {
        // El inicio de sesión fue exitoso
        localStorage.setItem('rutUsuario', this.rut);
        this.router.navigate(['/principal']);
        console.log('Inicio de sesión exitoso');
        loading.dismiss();
      },
      (error) => {
        // Hubo un error en el inicio de sesión
        console.error('Error en el inicio de sesión', error);
        this.presentAlert('Error', 'Inicio de sesión fallido', 'Por favor verifique su rut y contraseña.');
        loading.dismiss();
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
  

  ir_recuperar() {
    this.router.navigate(['/recuperar-pass']);
  }


  show_pass() {
    const passwordInput = document.getElementById('password') as HTMLInputElement;
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
    } else {
      passwordInput.type = 'password';
    }
  }

  ionViewDidEnter() {
    this.menuController.enable(false); // Deshabilita el menú
  }

   
}
