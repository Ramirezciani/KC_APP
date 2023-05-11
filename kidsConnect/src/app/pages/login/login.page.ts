import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  mostrarMenu = false;

   //Variables del ngModel para usuario y password
   

  constructor(private router:Router,
              private menu: MenuController) { }

  ngOnInit() {
    this.menu.enable(false, 'menuPrincipal');
  }

    // Funcion para validar los datos del usuario
   
    //funciones de navegacion

    IrHome(){
      this.router.navigate(['/principal'])
    }




}
