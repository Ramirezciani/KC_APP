import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MensajeService } from 'src/app/services/mensajes.service';

@Component({
  selector: 'app-enviar-mensaje',
  templateUrl: 'enviar-mensaje.page.html',
  styleUrls: ['enviar-mensaje.page.scss']
})
export class EnviarMensajePage {
  apiUrl = 'http://tmp.enred.cl/kc/rest/mensaje.php'; // Reemplaza con la URL de tu API

  rutDocente: string = '';
  mensaje: string = '';
  docente: any;

  constructor(private http: HttpClient, private mensajeService: MensajeService) { }

  buscarDocente(rut: string) {
    this.mensajeService.buscarPorDocentes(rut).subscribe(
      (response) => {
        if (response.success && response.data) {
          this.docente = response.data;
          console.log('Docente encontrado:', this.docente);
        } else {
          console.log('No se encontró un docente con el rut especificado');
        }
      },
      (error) => {
        console.log('Error al buscar el docente:', error);
      }
    );
  
  }

  enviarMensaje() {
    // Aquí puedes utilizar los datos del docente (this.docente) para enviar el mensaje
    console.log('Docente encontrado:', this.docente);
    console.log('Mensaje:', this.mensaje);
    // Resto de la lógica para enviar el mensaje...
  }
}
