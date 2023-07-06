import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Importa ReactiveFormsModule aquí
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MenuPrincipalComponent } from './components/menu-principal/menu-principal.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

@NgModule({
  declarations: [AppComponent, MenuPrincipalComponent, WelcomeComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, FormsModule, ReactiveFormsModule, ], 
  exports: [MenuPrincipalComponent, WelcomeComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
