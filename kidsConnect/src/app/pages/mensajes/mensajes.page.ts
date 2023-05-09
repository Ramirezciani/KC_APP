import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

interface Region {
  id_region: number;
  nom_reg: string;
}



@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.page.html',
  styleUrls: ['./mensajes.page.scss'],
})
export class MensajesPage implements OnInit {

  regiones: Region[] = [];

  constructor(private router:Router
              , private apiService:ApiService) { }

  ngOnInit() {
    this.apiService.obtenerRegiones().subscribe(data => {
    this.regiones = data;
    });
  }

  cargarRegiones() {
    this.apiService.obtenerRegiones().subscribe((data: Region[]) => {
      this.regiones = data;
    });
  }

 
  bandeja_entrada(){
    this.router.navigate(['/mensaje-recibido'])
  }
  
  ir_home(){
    this.router.navigate(['/principal'])
  }


}
