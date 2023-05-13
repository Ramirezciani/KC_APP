import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.page.html',
  styleUrls: ['./eventos.page.scss'],
})
export class EventosPage implements OnInit {

  constructor(private router:Router,
              private menuCtrl: MenuController) { }

  ngOnInit() {
  }
  
  onClick(){
    this.menuCtrl.toggle();

  }

}
