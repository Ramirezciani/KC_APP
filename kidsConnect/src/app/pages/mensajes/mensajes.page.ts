import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { MensajeService } from 'src/app/services/mensajes.service';


@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.page.html',
  styleUrls: ['./mensajes.page.scss'],
})
export class MensajesPage implements OnInit {
  
  mensajes : any[] = [];

  constructor(private router: Router, 
              private mensajeService: MensajeService,
              private menuCtrl:MenuController) {}


ngOnInit() {
  
}

  bandeja_entrada() {
    this.router.navigate(['/mensaje-recibido']);
  }

  ir_home() {
    this.router.navigate(['/principal']);
  }

  onClick(){
    this.menuCtrl.toggle();

  }

  ir_send(){
    this.router.navigate(['/enviar-mensaje'])
  }

}
