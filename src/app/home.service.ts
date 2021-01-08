import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private httpclient: HttpClient) { }

  getAlluser(): Observable<any>{
    return this.httpclient.get("http://localhost:3000/products");
  }
}
