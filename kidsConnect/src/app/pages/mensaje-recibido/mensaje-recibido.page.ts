import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { MensajeService } from 'src/app/services/mensajes.service';

@Component({
  selector: 'app-mensaje-recibido',
  templateUrl: './mensaje-recibido.page.html',
  styleUrls: ['./mensaje-recibido.page.scss'],
})
export class MensajeRecibidoPage implements OnInit {
  mensajes: any[] = [];
  rut: string = '';

  constructor(
    private mensajeService: MensajeService,
    private router: Router,
    private menuCtrl: MenuController
  ) {}

  ngOnInit() {
    const rutUsuario = localStorage.getItem('rutUsuario');
    this.rut = rutUsuario ? rutUsuario.toString() : '';

    // Obtener los mensajes del usuario
    this.obtenerMensajesPorRut(this.rut);
  }

  obtenerMensajesPorRut(rut: string) {
    this.mensajeService.getMensajesByRut(rut).subscribe(
      mensajes => {
        // Manejar los mensajes obtenidos
        this.mensajes = mensajes;
        console.log(this.mensajes);
      },
      error => {
        // Manejar el error
        console.error(error);
      }
    );
  }

  bandeja_entrada() {
    this.router.navigate(['/mensaje-recibido']);
  }

  ir_home() {
    this.router.navigate(['/principal']);
  }

  onClick() {
    setTimeout(() => {
      this.menuCtrl.toggle();
    }, 100);
  }

  ir_send() {
    this.router.navigate(['/enviar-mensaje']);
  }
}
