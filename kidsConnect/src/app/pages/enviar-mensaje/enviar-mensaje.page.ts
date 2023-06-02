
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MensajeService } from 'src/app/services/mensajes.service';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { MenuController, ToastController } from '@ionic/angular';


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
  tipoMensaje: string = '';
  rutEmisor: number;
  nombreEmisor: string = '';
  nombreUsuario: string = '';
  

  constructor(private mensajeService: MensajeService, 
              private http: HttpClient, 
              private menuCtrl:MenuController,
              private toastCtrl: ToastController) {
    this.rutEmisor = parseInt(localStorage.getItem('rutUsuario') || '0');
    this.nombreEmisor = localStorage.getItem('nombreUsuario') || '';
  }

  async buscarDocentes() {
    try {
      const response: any = await this.mensajeService.obtenerDocentes(this.nombre).toPromise();
      console.log(response); // Imprimir la respuesta en la consola

      if (response && response.success) {
        this.docentes = response.data;
        this.mostrarToast('Busqueda Exitosa');
      } else {
        this.mostrarToast('No existen coincidencias');
      }
    } catch (error) {
       this.mostrarToast('Error en la busqueda de docentes');
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
      const nombreEmisor = this.nombreEmisor

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
        nombre_emisor: nombreEmisor,
        rut_receptor: rutReceptor,
        nombre_receptor: nomReceptor,
        cont_mensaje: contMensaje,
        img_mensaje: '',
        tipo_mensaje: tipoMensajeApiValue
      };


      this.http.post('http://tmp.enred.cl/kc/rest/buzon.php', data, { responseType: 'text' }).subscribe(
        (response: any) => {
          this.mostrarToast('Envío exitoso' );
          // Resto de la lógica después de enviar el mensaje...
        },
        (error: HttpErrorResponse) => {
          if (error && error.error) {
            this.mostrarToast('Error al enviar mensaje a');
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

  async mostrarToast(mensaje: string) {
    const toast = await this.toastCtrl.create({
      message: mensaje,
      duration: 3000, // Duración del Toast en milisegundos
      position: 'bottom' // Posición del Toast en la pantalla (top, bottom, middle)
    });
    await toast.present();
  }
}

