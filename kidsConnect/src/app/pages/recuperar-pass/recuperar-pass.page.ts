import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-recuperar-pass',
  templateUrl: 'recuperar-pass.page.html',
  styleUrls: ['recuperar-pass.page.scss']
})

export class RecuperarPassPage implements OnInit {

  rutUser = '';
  passUser = ' ';

  constructor(private menuCtrl: MenuController,
              private http: HttpClient,
              private apiService: ApiService) { }

  ngOnInit() {
  }


  //Fucnion para abrir y cerrar el menucomponent 

  onClick() {
    this.menuCtrl.toggle();
  }

  actualizarCampo(rutUser: string, passUser: string) {
    this.apiService.actualizarUsuario(rutUser, passUser).subscribe(
      (response) => {
        // La solicitud PUT se realizó con éxito, puedes manejar la respuesta aquí
        console.log('Campo actualizado correctamente');
      },
      (error) => {
        // Manejar el error en caso de que la solicitud falle
        console.error('Error al actualizar el campo:', error);
      }
    );
  }

}
