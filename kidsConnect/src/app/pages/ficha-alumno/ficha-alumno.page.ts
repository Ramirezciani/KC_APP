import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-ficha-alumno',
  templateUrl: './ficha-alumno.page.html',
  styleUrls: ['./ficha-alumno.page.scss'],
})
export class FichaAlumnoPage implements OnInit {

  // fichas: any[] = [];
  // numRunAlumno: string = '';

  constructor(private apiService:ApiService,
              private router:Router,
              private menuCtrl:MenuController) { }
  

  ngOnInit() {
  }
  // buscarFichas(numRunAlumno: string) {
  //   this.apiService.obtenerFichaPorAlumno(numRunAlumno).subscribe((data: any[]) => {
  //     this.fichas = data.filter(ficha => ficha.alumno_numrun_alu === numRunAlumno);
  //   }, (error: HttpErrorResponse) => {
  //     console.log(error);
  //   });
  // }


  
  onClick(){
    this.menuCtrl.toggle();
  }


}
