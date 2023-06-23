import { Component, OnInit } from '@angular/core';
import { FichaService } from 'src/app/services/ficha.service';
import { MenuController, ToastController } from '@ionic/angular';

interface HistorialResponse {
  success: boolean;
  data?: any;
  message?: string;
}

@Component({
  selector: 'app-historial-ficha',
  templateUrl: './historial-ficha.page.html',
  styleUrls: ['./historial-ficha.page.scss'],
})
export class HistorialFichaPage implements OnInit {
  historial: any[] = [];
  rutAlumno: string = '';

  constructor(
    private fichaService: FichaService,
    private toastController: ToastController,
    private menuCtrl: MenuController
  ) {}

  ngOnInit() {}

  buscarHistorial() {
    if (this.rutAlumno.trim() !== '') {
      this.fichaService.buscarHistorialFicha(this.rutAlumno).subscribe(
        (response: HistorialResponse) => {
          if (response.success) {
            this.historial = response.data.data;
            this.presentToast('bottom', 'Ficha Encontrada, Presiona ver Ficha');
          } else {
            if (response.message) {
              this.presentToast('bottom', response.message);
            } else {
              this.presentToast('bottom', 'Error al buscar el historial de la ficha.');
            }
          }
        },
        (error: any) => {
          console.error(error);
          this.presentToast('bottom', 'Error al buscar el historial de la ficha.');
        }
      );
    } else {
      this.presentToast('bottom', 'El campo RUT del alumno es obligatorio');
    }
  }
  

  async presentToast(position: 'top' | 'middle' | 'bottom', message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 1500,
      position: position,
    });

    await toast.present();
  }

  onClick() {
    setTimeout(() => {
      this.menuCtrl.toggle();
    }, 100);
  }

}
