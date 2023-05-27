import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MensajeService } from 'src/app/services/mensajes.service';

@Component({
  selector: 'app-enviar-mensaje',
  templateUrl: 'enviar-mensaje.page.html',
  styleUrls: ['enviar-mensaje.page.scss']
})
export class EnviarMensajePage {
  mensaje: any = {};

  constructor(private http: HttpClient, private mensajeService:MensajeService) {}

  enviarMensaje() {
    this.mensajeService.enviarMensaje(this.mensaje)
      .subscribe(
        () => {
          // Éxito: mostrar mensaje de éxito o realizar otras acciones necesarias
          console.log('Mensaje enviado correctamente');
        },
        (error: any) => {
          // Error: mostrar mensaje de error o manejar el error según sea necesario
          console.error('Error al enviar el mensaje', error);
        }
      );
  }
}

