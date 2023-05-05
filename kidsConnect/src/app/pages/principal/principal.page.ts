import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  ir_mensajes(){
    this.router.navigate(['/mensajes'])
  }

  ir_ficha(){
    this.router.navigate(['/ficha-alumno'])
  }

  

}
