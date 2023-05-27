import { Component } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { MensajeService } from 'src/app/services/mensajes.service';

@Component({
  selector: 'app-enviar-mensaje',
  templateUrl: 'enviar-mensaje.page.html',
  styleUrls: ['enviar-mensaje.page.scss']
})
export class EnviarMensajePage {
  rutParticipante = [];
  nombreParticipante = [];
  contMensaje = [];

  constructor(private http: HttpClient, private mensajeService:MensajeService) {}
 
  apiUrl = 'http://tmp.enred.cl/kc/rest/mensaje.php'; // Reemplaza con la URL de tu API

  enviarMensaje() {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  
    const data = {
      rutParticipante: this.rutParticipante,
      nombreParticipante: this.nombreParticipante,
      contMensaje: this.contMensaje
    };
  
    this.http.post(this.apiUrl, data, { headers })
      .subscribe(
        response => {
          console.log('Mensaje enviado:', response);
        },
        error => {
          console.log('Error al enviar el mensaje:', error);
        }
      );
  }
}
  

