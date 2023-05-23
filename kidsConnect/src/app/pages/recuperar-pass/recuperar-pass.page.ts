import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-recuperar-pass',
  templateUrl: 'recuperar-pass.page.html',
  styleUrls: ['recuperar-pass.page.scss']
})

export class RecuperarPassPage implements OnInit {

  rut_user = [];
  pass_user = [];

  constructor(private menuCtrl: MenuController, private http: HttpClient) { }

  ngOnInit() {
  }

  onSubmit() {
    if (this.rut_user && this.pass_user) {
      const formData = {
        rut_user: this.rut_user,
        pass_user: this.pass_user
      };
      const apiUrl = 'http://tmp.enred.cl/kc/rest/your-endpoint'; // Reemplaza con la URL correcta

      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      });

      this.http.put(apiUrl, formData, { headers })
        .subscribe(
          response => {
            console.log('Solicitud PUT exitosa', response);
            // Realiza las acciones necesarias después de una actualización exitosa
          },
          error => {
            console.error('Error en la solicitud PUT', error);
            // Realiza el manejo de errores correspondiente
          }
        );
    }
  }

  onClick() {
    this.menuCtrl.toggle();
  }

}
