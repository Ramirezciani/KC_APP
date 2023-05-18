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
              private menuCtrl:MenuController) { }

  ngOnInit() {
  }
  onClick() {
    this.menuCtrl.toggle();
  }
}
