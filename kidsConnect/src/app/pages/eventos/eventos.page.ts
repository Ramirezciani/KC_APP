import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.page.html',
  styleUrls: ['./eventos.page.scss'],
})
export class EventosPage implements OnInit {
  mensajes: any[] = [];

  constructor(private http: HttpClient, private menuCtrl: MenuController) {}

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
        } else {
          console.log('La respuesta está vacía');
        }
      },
      (error) => {
        console.error('Error al obtener los mensajes:', error);
      }
    );
  }

  onClick() {
    this.menuCtrl.toggle();
  }
}
