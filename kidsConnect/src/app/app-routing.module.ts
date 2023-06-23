import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DbService } from './services/db.service';


const routes: Routes = [

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'principal',
    loadChildren: () => import('./pages/principal/principal.module').then( m => m.PrincipalPageModule)
  },
  
  {
    path: 'ficha-alumno',
    loadChildren: () => import('./pages/ficha-alumno/ficha-alumno.module').then( m => m.FichaAlumnoPageModule)
  },
  {
    path: 'mensajes',
    loadChildren: () => import('./pages/mensajes/mensajes.module').then( m => m.MensajesPageModule)
  },
  {
    path: 'mensaje-recibido',
    loadChildren: () => import('./pages/mensaje-recibido/mensaje-recibido.module').then( m => m.MensajeRecibidoPageModule)
  },
  {
    path: 'eventos',
    loadChildren: () => import('./pages/eventos/eventos.module').then( m => m.EventosPageModule)
  },
  {
    path: 'enviar-mensaje',
    loadChildren: () => import('./pages/enviar-mensaje/enviar-mensaje.module').then( m => m.EnviarMensajePageModule)
  },
  {
    path: 'recuperar-pass',
    loadChildren: () => import('./pages/recuperar-pass/recuperar-pass.module').then( m => m.RecuperarPassPageModule)
  },  {
    path: 'responder-mensaje',
    loadChildren: () => import('./pages/responder-mensaje/responder-mensaje.module').then( m => m.ResponderMensajePageModule)
  },
  {
    path: 'historial-ficha',
    loadChildren: () => import('./pages/historial-ficha/historial-ficha.module').then( m => m.HistorialFichaPageModule)
  },




];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
