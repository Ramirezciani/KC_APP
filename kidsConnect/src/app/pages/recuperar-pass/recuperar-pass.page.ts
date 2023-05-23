import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-recuperar-pass',
  templateUrl: 'recuperar-pass.page.html',
  styleUrls: ['recuperar-pass.page.scss']
})
export class RecuperarPassPage implements OnInit {

  rut_user: string = '';
  pass_user: string = '';
  current_password: string = '';

  constructor(private menuCtrl: MenuController, private http: HttpClient) { }

  ngOnInit() {
  }

  onSubmit() {
    if (this.rut_user && this.pass_user && this.current_password) {
      const formData = {
        rut_user: this.rut_user,
        pass_user: this.pass_user,
        current_password: this.current_password
      };
      const apiUrl = 'http://tmp.enred.cl/kc/rest/put_password.php'; 

      this.http.put(apiUrl, formData)
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
