import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MenuController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.page.html',
  styleUrls: ['./eventos.page.scss'],
})
export class EventosPage implements OnInit {

  fechaSeleccionada: string = '';
  mensajesFiltrados: any[] = [];

  constructor(
    private menuCtrl: MenuController,
    private toastController: ToastController,
    private http: HttpClient
  ) {}

  ngOnInit() {}

  // Función para abrir el menú lateral
  onClick() {
    this.menuCtrl.toggle();
  }

  // Función para mostrar los mensajes de tipo anuncio y/o evento
  async filtrarMensajesPorFecha() {
    if (this.fechaSeleccionada) {
      try {
        const fechaSeleccionada = new Date(this.fechaSeleccionada).toISOString().substring(0, 10);
        const url = 'http://tmp.enred.cl/html/kc/rest/get_anuncios.php'; // Reemplaza por la URL de tu API
  
        const response = await this.http.get<any[]>(url).toPromise();
        if (typeof response !== 'undefined') {
          this.mensajesFiltrados = response.filter(mensaje => mensaje.fecha.substring(0, 10) === fechaSeleccionada);
        } else {
          this.mensajesFiltrados = [];
        }
      } catch (error) {
        console.error('Error al obtener los mensajes:', error);
        this.mostrarMensajeError('Error al obtener los mensajes');
      }
    } else {
      this.mensajesFiltrados = [];
    }
  }
  

  async mostrarMensajeError(mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 3000,
      color: 'danger'
    });
    toast.present();
  }
}
