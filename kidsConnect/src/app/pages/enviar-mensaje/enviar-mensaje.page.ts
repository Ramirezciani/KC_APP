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

//Variables que mensaje necesita para post y para obtener resultados en la busqueda
export class EnviarMensajePage {
  nombre: string = '';
  docentes: any[] = [];
  docenteSeleccionado: any = null;
  mensaje: string = '';
  nombreEmisor: string = '';
  tipoMensaje: string = '';
  rutEmisor: number;
  

  constructor(private mensajeService: MensajeService, 
              private http: HttpClient,
              private toastController: ToastController,
              private menuCtrl:MenuController) {

//Valor del rut del usuario obtenido desde el login page

    this.rutEmisor = parseInt(localStorage.getItem('rutUsuario') || '0');
  }

  //Funcion que busca docentes, al apretar el boton trae todos los docentes de la lista curso y/o se puede buscar por nombre 
  async buscarDocentes() {
    try {
      const response: any = await this.mensajeService.obtenerDocentes(this.nombre).toPromise();
      console.log(response); // Imprimir la respuesta en la consola

      if (response && response.success) {
        this.docentes = response.data;
        this.presentToast('bottom', 'Docentes encontrados con exito');
        console.log('Docentes encontrados:', this.docentes);
      } else {
        this.presentToast('bottom', 'No existen resultado para tu busqueda');
        console.log('No se encontraron docentes con el nombre especificado');
      }
    } catch (error) {
      console.log('Error al buscar los docentes:', error);
    }
  }

  //Funcion para enviar el mensaje, console logs solo a modo de prueba para ver que parametros se estan guardando, las variables const 
  //son los datos a enviar.
  async enviarMensaje() {
    if (!this.docenteSeleccionado) {
      this.presentToast('bottom', 'Por favor selecciona un docente');
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

      //Envio de solicitud post a la URL definida donde se encuentra el endopoint. Captura de errores mediante toastController 

      this.http.post('http://tmp.enred.cl/kc/rest/buzon.php', data, { responseType: 'text' }).subscribe(
        (response: any) => {
          console.log('Mensaje enviado:', response);
          this.presentToast('bottom', 'Mensaje Enviado');
          // Resto de la lógica después de enviar el mensaje...
        },
        (error: HttpErrorResponse) => {
          if (error && error.error) {
            this.presentToast('bottom', 'Error al enviar mensaje a' );
            console.log('Error al enviar el mensaje:', error.error);
          } else {
            console.log('Error desconocido');
          }
        }
      );
    }
  }

  //Funcion que implementa el toast en la pagina
  async presentToast(position: 'top' | 'middle' | 'bottom', message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 1500,
      position: position,
    });

    await toast.present();
  }

  //Funcion para abrir el menu lateral
  onClick() {
    this.menuCtrl.toggle();
  }
}
