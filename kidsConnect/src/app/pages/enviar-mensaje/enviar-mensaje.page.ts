import { Component } from '@angular/core';
import { MensajeService } from 'src/app/services/mensajes.service';

@Component({
  selector: 'app-enviar-mensaje',
  templateUrl: 'enviar-mensaje.page.html',
  styleUrls: ['enviar-mensaje.page.scss']
})
export class EnviarMensajePage {
  nombre: string = '';
  docentes: any[] = [];
  rutDocente: string = '';
  nombreDocente: string = '';
  mensaje: string = '';


  constructor(private mensajeService: MensajeService) {}

  async buscarDocentes() {
    try {
      const response: any = await this.mensajeService.obtenerDocentes(this.nombre).toPromise();
      console.log(response); // Imprimir la respuesta en la consola

      if (response && response.success) {
        this.docentes = response.data;
        console.log('Docentes encontrados:', this.docentes);
      } else {
        console.log('No se encontraron docentes con el nombre especificado');
      }
    } catch (error) {
      console.log('Error al buscar los docentes:', error);
    }
  }

  enviarMensaje() {
    if (this.rutDocente && this.nombreDocente) {
      // Aquí puedes utilizar los datos del docente seleccionado para enviar el mensaje
      console.log('Docente seleccionado:', this.rutDocente);
      console.log('Nombre del docente seleccionado:', this.nombreDocente);
      console.log('Mensaje:', this.mensaje);
      // Resto de la lógica para enviar el mensaje...
    } else {
      console.log('No se ha seleccionado ningún docente');
    }
  }
}
