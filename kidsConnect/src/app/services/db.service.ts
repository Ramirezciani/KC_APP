import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DbService  {

  constructor(private router: Router, private http: HttpClient) { }
  
  private apiUrl = 'http://tmp.enred.cl/rest/get_user_pass.php';
  
  canActivate(idUser: string, password: string): Observable<boolean> | boolean {
    return this.validateUser(idUser, password);
  }
  
  validateUser(idUser: string, password: string): Observable<boolean> {
    const url = `${this.apiUrl}?idUser=${idUser}&password=${password}`;
  
    return this.http.get<boolean>(url);
  }
  
}
