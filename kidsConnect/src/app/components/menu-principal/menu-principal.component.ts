import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.component.html',
  styleUrls: ['./menu-principal.component.scss'],
})
export class MenuPrincipalComponent  implements OnInit {

  constructor(private router:Router,
              private menuCtrl: MenuController) { }

  ngOnInit() {}


  //desplegar menu
  onClick(){
    this.menuCtrl.toggle();
  }

  ir_home(){
    this.router.navigate(['/principal'])
  }

  ir_mensajes(){
    this.router.navigate(['/mensajes'])
  }

  ir_eventos(){
    this.router.navigate(['/eventos'])
  }
  ir_ficha(){
    this.router.navigate(['/ficha-alumno'])
  }
}
