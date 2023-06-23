import { Component, OnInit } from '@angular/core';
import { FichaService } from 'src/app/services/ficha.service';

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
  historial: any = [];
  rutAlumno: string = '';

  constructor(private fichaService: FichaService) {}

  ngOnInit() {}

  buscarHistorial() {
    this.fichaService.buscarHistorialFicha(this.rutAlumno).subscribe(
      (response: HistorialResponse) => {
        if (response.success) {
          this.historial = response.data;
          console.log(this.historial);
        } else {
          console.error(response.message);
        }
      },
      (error: any) => {
        console.error(error);
      }
    );
  }
}
