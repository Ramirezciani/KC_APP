import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiService } from 'src/app/services/api.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-recuperar-pass',
  templateUrl: 'recuperar-pass.page.html',
  styleUrls: ['recuperar-pass.page.scss']
})

export class RecuperarPassPage implements OnInit {

  //Variables 
  rutUser = '';
  passUser = '';
  newPass = '';
  confirmPass = '';
  showPassword: boolean = false;
  nombreUser = '';
  correoElectronico = '';
  emailAdmin = 'pa.ramirezciani13@gmail.com';

  constructor(private menuCtrl: MenuController,
              private http: HttpClient,
              private apiService: ApiService, 
              private toast:ToastController,
              private router:Router) { }

  ngOnInit() {
  }


  //Fucnion para abrir y cerrar el menucomponent 

  onClick() {
    this.menuCtrl.toggle();
  }


  actualizarCampo(rutUser: string, passUser: string, newPass: string, confirmPass: string) {
    if (!rutUser || !passUser || rutUser.trim() === '' || passUser.trim() === '') {
      this.presentToast('Por favor ingresa todos los campos', 'bottom');
      return;
    }
  
    if (newPass !== confirmPass) {
      this.presentToast('La confirmación de contraseña no coincide', 'bottom');
      return;
    }
  
    // Realizar la solicitud GET para obtener la lista de usuarios
    this.apiService.obtenerUsuarios().subscribe(
      (value: Object) => {
        const usuarios = value as any[]; // Convertir el valor a tipo 'any[]'
        // Verificar si el RUT existe en la lista de usuarios
        const rutExistente = usuarios.some(usuario => usuario.rut_us === rutUser);
        if (!rutExistente) {
          this.presentToast('El RUT no se encuentra en la base de datos', 'bottom');
          return;
        }
        
        // Obtener el usuario correspondiente al RUT
        const usuario = usuarios.find(usuario => usuario.rut_us === rutUser);
        if (passUser !== passUser) {
          this.presentToast('La contraseña actual es incorrecta', 'bottom');
          return;
        }
  
        // Continuar con la actualización del campo
        this.apiService.actualizarUsuario(rutUser, newPass).subscribe(
          (response) => {
            console.log('Campo actualizado correctamente');
            this.presentToast('Campo actualizado correctamente', 'bottom');
          },
          (error) => {
            console.error('Error al actualizar el campo:', error);
            this.presentToast('Error al actualizar el campo', 'bottom');
          }
        );
      },
      (error) => {
        console.error('Error al obtener la lista de usuarios:', error);
        this.presentToast('Error al obtener la lista de usuarios', 'bottom');
      }
    );
  }
  

  async presentToast(message: string, position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toast.create({
      message: message,
      duration: 1500,
      position: position
    });
  
    toast.present();
  }


  show_pass() {
    const passwordInput = document.getElementById('password') as HTMLInputElement;
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
    } else {
      passwordInput.type = 'password';
    }
  }
  
  enviarCorreoRecuperacion() {
    const subject = 'Solicitud de recuperación de contraseña';
    const correoElectronico = this.correoElectronico; // Obtener el valor del campo de entrada de correo electrónico
  
    // Validar si se ha ingresado un correo electrónico
    if (!correoElectronico || correoElectronico.trim() === '') {
      this.presentToast('Por favor ingresa tu dirección de correo electrónico', 'bottom');
      return;
    }
  
    const rutUsuario = localStorage.getItem('rutUsuario'); // Obtener el rut del usuario almacenado en localStorage
  
    const body = `Se ha recibido una solicitud de recuperación de contraseña.\nRut del usuario: ${rutUsuario}`;
  
    const mailTo = `mailto:${this.emailAdmin}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  
    // Redirigir al cliente de correo con los datos del correo predefinidos
    window.location.href = mailTo;
  }


  ir_login(){
    this.router.navigate(['/login'])
  }
}


