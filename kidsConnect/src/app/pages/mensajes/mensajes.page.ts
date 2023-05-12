import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

interface Mensaje {
  id_msj: number;
  con_msj: string;
  fec_msj: string;
  img_mjs: string;
  tipo_mensaje_id_msj: number;
  apoderado_id_apo: number;
  usuario_nunrun_us: string;
}

@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.page.html',
  styleUrls: ['./mensajes.page.scss'],
})
export class MensajesPage implements OnInit {
  mensajes: Mensaje[] = [];

  constructor(private router: Router, private apiService: ApiService) {}

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
}
