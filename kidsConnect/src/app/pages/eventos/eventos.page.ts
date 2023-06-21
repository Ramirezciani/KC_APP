import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MenuController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.page.html',
  styleUrls: ['./eventos.page.scss'],
})
export class EventosPage implements OnInit {
  mensajes: any[] = [];
  mensajesFiltrados: any[] = []; // Array para almacenar los mensajes filtrados
  mesSeleccionado: string = ''; // Variable para almacenar el mes seleccionado

  constructor(
    private http: HttpClient,
    private menuCtrl: MenuController,
    private toastController: ToastController
  ) {}

  ngOnInit() {
    this.obtenerMensajes();
  }

  obtenerMensajes() {
    const url = 'http://tmp.enred.cl/kc/rest/get_anuncios.php';
    this.http.get<any[]>(url).subscribe(
      (response) => {
        if (response && response.length > 0) {
          console.log(response); // Verificar la respuesta en la consola
          this.mensajes = response;
          this.mensajesFiltrados = response; // Inicialmente, los mensajes filtrados serán iguales a todos los mensajes
          this.mostrarToast();
        } else {
          console.log('La respuesta está vacía');
        }
      },
      (error) => {
        console.error('Error al obtener los mensajes:', error);
      }
    );
  }

  filtrarMensajes() {
    if (this.mesSeleccionado) {
      // Aplicar filtro solo si se ha seleccionado un mes
      this.mensajesFiltrados = this.mensajes.filter((mensaje) => {
        const fechaMensaje = new Date(mensaje.fecha_envio);
        const mesMensaje = fechaMensaje.getMonth() + 1; // El mes en JavaScript se indexa desde 0, por lo que se suma 1
        return mesMensaje.toString() === this.mesSeleccionado;
      });
      this.mostrarToast();
    } else {
      this.mensajesFiltrados = this.mensajes; // Si no se ha seleccionado un mes, mostrar todos los mensajes
    }
  }

  async mostrarToast() {
    const cantidadMensajes = this.mensajesFiltrados.length;
    const toast = await this.toastController.create({
      message: `Hay ${cantidadMensajes} mensajes en el mes seleccionado`,
      duration: 2000,
      position: 'bottom'
    });
    toast.present();
  }

  onClick() {
    this.menuCtrl.toggle();
  }
}
