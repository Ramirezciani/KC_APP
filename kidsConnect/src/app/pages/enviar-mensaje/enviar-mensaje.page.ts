
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MensajeService } from 'src/app/services/mensajes.service';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-enviar-mensaje',
  templateUrl: 'enviar-mensaje.page.html',
  styleUrls: ['enviar-mensaje.page.scss']
})
export class EnviarMensajePage {
  nombre: string = '';
  docentes: any[] = [];
  docenteSeleccionado: any = null;
  mensaje: string = '';
  nombreEmisor: string = '';
  tipoMensaje: string = '';
  rutEmisor: number;
  

  constructor(private mensajeService: MensajeService, private http: HttpClient, private menuCtrl:MenuController) {
    this.rutEmisor = parseInt(localStorage.getItem('rutUsuario') || '0');
  }

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

  async enviarMensaje() {
    if (this.docenteSeleccionado) {
      console.log('Docente seleccionado:', this.docenteSeleccionado.rut_participante);
      console.log('Nombre del docente seleccionado:', this.docenteSeleccionado.nombre_completo);
      console.log('Mensaje:', this.mensaje);
      console.log('Rut del emisor:', this.rutEmisor);
      console.log('Nombre del emisor:', this.nombreEmisor);

      // Obtén los datos necesarios para la solicitud POST
      const rutReceptor = this.docenteSeleccionado.rut_participante;
      const nomReceptor = this.docenteSeleccionado.nombre_completo;
      const contMensaje = this.mensaje;
      const rutEmisor = this.rutEmisor;
      const nomEmisor = this.nombreEmisor;

      // Map the selected type to the API type value
      // let tipoMensajeApiValue = '';
      // switch (this.tipoMensaje) {
      //   case 'Justificativo':
      //     tipoMensajeApiValue = 'J';
      //     break;
      //   case 'Comunicacion':
      //     tipoMensajeApiValue = 'C';
      //     break;
      //   case 'Comprobante':
      //     tipoMensajeApiValue = 'P';
      //     break;
      // }
              let tipoMensajeApiValue = '';
        switch (this.tipoMensaje) {
          case 'Justificativo':
            tipoMensajeApiValue = 'Justificativo';
            break;
          case 'Comunicacion':
            tipoMensajeApiValue = 'Comunicacion';
            break;
          case 'Comprobante':
            tipoMensajeApiValue = 'Comprobante';
            break;
          default:
            // Si ninguna de las opciones coincide, puedes manejarlo como desees.
            // En este ejemplo, se asigna un valor por defecto.
            tipoMensajeApiValue = '';
            break;
        }

      // Crea el objeto de datos para la solicitud POST
      const data = {
        rut_emisor: rutEmisor,
        nombre_emisor: nomEmisor,
        rut_receptor: rutReceptor,
        nombre_receptor: nomReceptor,
        cont_mensaje: contMensaje,
        img_mensaje: '', // Debes proporcionar el valor adecuado si se incluye la opción de enviar imagen
        tipo_mensaje: tipoMensajeApiValue
      };


      this.http.post('http://tmp.enred.cl/kc/rest/buzon.php', data, { responseType: 'text' }).subscribe(
        (response: any) => {
          console.log('Mensaje enviado:', response);
          // Resto de la lógica después de enviar el mensaje...
        },
        (error: HttpErrorResponse) => {
          if (error && error.error) {
            console.log('Error al enviar el mensaje:', error.error);
          } else {
            console.log('Error desconocido');
          }
        }
      );
      }
    }


  //Funcion para abrir el menu lateral
  onClick() {
    this.menuCtrl.toggle();
  }
}

