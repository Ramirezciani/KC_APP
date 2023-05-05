import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

   //Variables del ngModel para usuario y password
   usuario: string = '';
   password: string = '';

  constructor(private router:Router) { }

  ngOnInit() {
  }

    // Funcion para validar los datos del usuario
    userDataValidate(){
      console.log(this.usuario);
      console.log(this.password)
     
    }

    //funciones de navegacion

    IrHome(){
      this.router.navigate(['/principal'])
    }




}
