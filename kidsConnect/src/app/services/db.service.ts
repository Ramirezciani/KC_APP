import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DbService {
  apiURL = 'http://tmp.enred.cl/kc/rest/login.php';

  constructor(private router: Router, private http: HttpClient) { }

  validarCredenciales(rut: string, password: string): boolean {
    // Aquí puedes realizar la lógica para validar los datos de usuario y contraseña

    // Ejemplo de validación con el dato "18275922"
    if (rut === '18275922' && password === '18275922') {
      // Los datos son válidos
      return true;
    } else {
      // Los datos son inválidos
      return false;
    }
  }

}
