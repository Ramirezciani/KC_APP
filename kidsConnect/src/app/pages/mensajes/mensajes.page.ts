import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.page.html',
  styleUrls: ['./mensajes.page.scss'],
})
export class MensajesPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  bandeja_entrada(){
    this.router.navigate(['/mensaje-recibido'])
  }
}
