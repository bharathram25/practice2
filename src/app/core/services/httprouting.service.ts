import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class HttproutingService {
  backendUrl = environment.apiUrl;
  constructor(private httpclient: HttpClient) { }

  getMethod(url:string){
    return this.httpclient.get(this.backendUrl + url);
  }
  postMethod(url:string, data: string){
    return this.httpclient.post(this.backendUrl + url , data )
  }

}
