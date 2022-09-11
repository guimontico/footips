import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HomeService {
  apiUrl = environment.footballApi
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor() { }
}
