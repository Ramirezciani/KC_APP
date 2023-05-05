import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  //Url de la api 
  apiUrl = 'http://tmp.enred.cl/rest/get_ficha.php/rest/get_ficha.php';


  constructor(private http:HttpClient) { }



}

 

 


