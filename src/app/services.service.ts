import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor( private http:HttpClient) { }
  url = "https://karljoke.herokuapp.com/jokes/10";

  getjokers():Observable<any>{
    return this.http.get(this.url);
  }
}
