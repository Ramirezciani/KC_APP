import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';


@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {

  nombreUsuario: string = '';

  constructor(private router:Router,
              private menuCtrl: MenuController,
              private http:HttpClient,
              ) { }

              ngOnInit() {
                const rutUsuario = localStorage.getItem('rutUsuario');
                if (rutUsuario) {
                  const endpointURL = `https://tmp.enred.cl/kc/rest/get_user_id.php?nombreFuncion=buscarUsuarioPorRut&rut_us=${rutUsuario}`;
            
                  this.http.get(endpointURL).subscribe(
                    (response: any) => {
                      if (response.success && response.data) {
                        const usuario = response.data;
                        this.nombreUsuario = `${usuario.nom_us} ${usuario.ap_pat_us} ${usuario.ap_mat_us}`;
                        localStorage.setItem('nombreUsuario', this.nombreUsuario);
                      }
                    },
                    (error) => {
                      console.error('Error al obtener el usuario:', error);
                    }
                  );
                }
              }

  ir_mensajes(){
    this.router.navigate(['/mensajes'])
  }

  ir_ficha(){
    this.router.navigate(['/ficha-alumno'])
  }

  ir_eventos(){
    this.router.navigate(['/eventos'])
  }

  onClick(){
    this.menuCtrl.toggle();

  }

  

}
