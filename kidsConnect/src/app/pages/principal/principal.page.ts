import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {

  constructor(private router:Router,
              private menuCtrl: MenuController) { }

  ngOnInit() {
  }

  ir_mensajes(){
    this.router.navigate(['/mensajes'])
  }

  ir_ficha(){
    this.router.navigate(['/ficha-alumno'])
  }

  ir_eventos(){
    this.router.navigate(['/eventos'])
  }

  onClick(){
    this.menuCtrl.toggle();

  }

  

}
