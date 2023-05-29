import { Component } from '@angular/core';
import { MensajeService } from 'src/app/services/mensajes.service';

@Component({
  selector: 'app-enviar-mensaje',
  templateUrl: 'enviar-mensaje.page.html',
  styleUrls: ['enviar-mensaje.page.scss']
})
export class EnviarMensajePage {
  rutDocente: string = '';
  mensaje: string = '';
  docentes: any[] = [];
  nombre: string = '';

  constructor(private mensajeService: MensajeService) {}

  async buscarDocentes() {
    try {
      const response: any = await this.mensajeService.obtenerDocentes(this.nombre).toPromise();
      console.log(response); // Imprimir la respuesta en la consola
  
      if (response && response.success) {
        this.docentes = response.data;
        console.log('Docentes encontrados:', this.docentes);
      } else {
        this.docentes = []; // Reiniciar el array de docentes si no se encontraron resultados
        console.log('No se encontraron docentes con el nombre especificado');
      }
    } catch (error) {
      this.docentes = []; // Reiniciar el array de docentes en caso de error
      console.log('Error al buscar los docentes:', error);
    }
  }

  enviarMensaje() {
    // Aquí puedes utilizar los datos del docente seleccionado para enviar el mensaje
    console.log('Docente seleccionado:', this.rutDocente);
    console.log('Mensaje:', this.mensaje);
    // Resto de la lógica para enviar el mensaje...
  }
}
