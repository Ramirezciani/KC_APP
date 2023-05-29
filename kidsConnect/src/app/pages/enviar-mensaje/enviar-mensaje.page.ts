import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MensajeService } from 'src/app/services/mensajes.service';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';

// ...

@Component({
  selector: 'app-enviar-mensaje',
  templateUrl: 'enviar-mensaje.page.html',
  styleUrls: ['enviar-mensaje.page.scss']
})
export class EnviarMensajePage {
  nombre: string = '';
  docentes: any[] = [];
  docenteSeleccionado : any  = [];
  mensaje: string = '';
  nombreEmisor: string = '';

  constructor(private mensajeService: MensajeService, private http:HttpClient) {}

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
    if (this.docenteSeleccionado) {
      console.log('Docente seleccionado:', this.docenteSeleccionado.rut_participante);
      console.log('Nombre del docente seleccionado:', this.docenteSeleccionado.nombre_completo);
      console.log('Mensaje:', this.mensaje);
      console.log('Rut del emisor:', localStorage.getItem('rut_emisor'));
      console.log('Nombre del emisor:', this.nombreEmisor);
  
      // Obtén los datos necesarios para la solicitud POST
      const rutReceptor = this.docenteSeleccionado.rut_participante;
      const nomReceptor = this.docenteSeleccionado.nombre_completo;
      const contMensaje = this.mensaje;
      const rutEmisor = localStorage.getItem('rut_emisor');
      const nomEmisor = this.nombreEmisor;
  
      // Crea el objeto de datos para la solicitud POST
      const data = {
        rutParticipante: rutReceptor,
        nombreParticipante: nomReceptor,
        contMensaje: contMensaje
      };
  
      // Realiza la solicitud POST a través de la API
      this.http.post<any>('http://tmp.enred.cl/kc/rest/mensajes-movil.php', data).subscribe(
        (response: HttpResponse<any>) => {
          console.log('Mensaje enviado:', response.body.mensaje);
          // Resto de la lógica después de enviar el mensaje...
        },
        (error: HttpErrorResponse) => {
          console.log('Error al enviar el mensaje:', error.error);
        }
      );
  
    } else {
      console.log('No se ha seleccionado ningún docente');
    }
  }
}  
