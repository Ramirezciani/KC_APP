import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';

interface Mensaje {
  cod_mensaje: string; 
  fch_crea: string; 
  img_msj: string;
  cont_msj: string; 
  tip_msj_cod_tip_m: number; 
  usuario_rut_us: number;
  usuario_tipo_us_cod_tip: number; 
  nom_tip_m: string;

}

@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.page.html',
  styleUrls: ['./mensajes.page.scss'],
})
export class MensajesPage implements OnInit {
  mensajes: Mensaje[] = [];
  filtroMensaje: string = '';

  constructor(private router: Router, private apiService: ApiService,
              private menuCtrl:MenuController) {}

  ngOnInit() {
    this.cargarMensajes();
  }

  cargarMensajes() {
    this.apiService.obtenerMensajesAll().subscribe(
      (data: Mensaje[]) => {
        this.mensajes = data;
      },
      (error) => {
        console.log(error);
      }
    );
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
