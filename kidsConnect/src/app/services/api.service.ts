import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  //Url de la api 
  // private apiUrl  = 'http://tmp.enred.cl/rest/api.php';


  constructor(private http:HttpClient) { }

  obtenerRegiones(): Observable<any> {
    return this.http.get('http://tmp.enred.cl/get_region.php');
  }

  
}

 

