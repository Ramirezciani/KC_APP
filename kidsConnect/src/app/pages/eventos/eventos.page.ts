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
          this.filtrarMensajes(); // Filtrar los mensajes después de obtenerlos
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
      const mesSeleccionado = this.mesSeleccionado.padStart(2, '0'); // Asegurarse de que el mes tenga dos dígitos (ejemplo: '07')
      const yearSeleccionado = new Date().getUTCFullYear(); // Obtener el año actual en UTC
  
      this.mensajesFiltrados = this.mensajes.filter((mensaje) => {
        const fechaMensaje = new Date(mensaje.fecha_envio);
        const mesMensaje = (fechaMensaje.getUTCMonth() + 1).toString().padStart(2, '0'); // Obtener el mes en UTC y asegurarse de que tenga dos dígitos
        const yearMensaje = fechaMensaje.getUTCFullYear(); // Obtener el año del mensaje en UTC
  
        return mesMensaje === mesSeleccionado && yearMensaje === yearSeleccionado;
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
    setTimeout(() => {
      this.menuCtrl.toggle();
    }, 100);
  }
}
