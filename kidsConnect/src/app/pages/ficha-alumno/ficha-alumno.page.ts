import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';
import { FormsModule } from '@angular/forms';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-ficha-alumno',
  templateUrl: './ficha-alumno.page.html',
  styleUrls: ['./ficha-alumno.page.scss'],
})
export class FichaAlumnoPage implements OnInit {
  fichas: any = {};
  rutAlumno: string = '';

  constructor(
    private apiService: ApiService,
    private router: Router,
    private menuCtrl: MenuController,
    private toastController: ToastController
  ) {}

  ngOnInit() {}

  async buscarFicha() {
    try {
      const response: any = await this.apiService.buscarFichaPorRut(this.rutAlumno).toPromise();
      console.log(response); // Imprimir el resultado en la consola
  
      if (response.success) {
        this.fichas = response.data;
        if (!this.fichas || Object.keys(this.fichas).length === 0) {
          // Mostrar mensaje si no hay datos de la ficha
          this.presentToast('bottom', 'No se encontraron datos para el alumno ingresado.');
        }
      } else {
        // Mostrar mensaje de error si no se encontró la ficha
        this.presentToast('bottom', 'No se encontraron datos para el alumno ingresado.');
      }
    } catch (error) {
      // Manejar errores de la solicitud
      
    }
  }
  
  

  onClick() {
    this.menuCtrl.toggle();
  }

  async presentToast(position: 'top' | 'middle' | 'bottom', message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 1500,
      position: position,
    });

    await toast.present();
  }
}
