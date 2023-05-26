import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-enviar-mensaje',
  templateUrl: './enviar-mensaje.page.html',
  styleUrls: ['./enviar-mensaje.page.scss'],
})
export class EnviarMensajePage implements OnInit {

  constructor(private router:Router,
              private menuCtrl:MenuController,
              private http: HttpClient) { }

  ngOnInit() {
  }
  onClick() {
    this.menuCtrl.toggle();
  }
  mensaje = [];
  codCurso = [];
  rutProfesor = [];
  

  

  enviarMensaje() {
    const mensajeData = {
      mensaje: this.mensaje,
      codCurso: this.codCurso,
      rutProfesor: this.rutProfesor
    };

    this.http.post('http://tmp.enred.cl/kc/rest/buzon.php', mensajeData)
      .subscribe(
        response => {
          console.log('Mensaje enviado correctamente');
          // Realizar acciones adicionales si es necesario
        },
        error => {
          console.error('Error al enviar el mensaje', error);
          // Realizar acciones adicionales si es necesario
        }
      );
  }

}
