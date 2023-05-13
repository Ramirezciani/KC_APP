import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  mostrarMenu = false;
  username = '';
  password = '';

  constructor(private router: Router, private menu: MenuController, private dbService: DbService) { }

  ngOnInit() {
    this.menu.enable(false, 'menuPrincipal');
  }

  IrHome() {
    this.router.navigate(['/principal']);
  }

  // login() {
  //   this.dbService.canActivate(this.username, this.password)
  //     .then(validCredentials => {
  //       if (validCredentials) {
  //         // Credenciales válidas, permitir el acceso al sistema
  //         this.router.navigate(['/principal']);
  //       } else {
  //         // Credenciales inválidas, mostrar mensaje de error al usuario
  //         console.error('Credenciales inválidas');
  //         // Mostrar mensaje de error al usuario
  //       }
  //     })
  //     .catch(error => {
  //       console.error('Error en la validación de inicio de sesión:', error);
  //       // Mostrar mensaje de error al usuario
  //     });
  // }

}
