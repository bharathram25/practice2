import { Injectable } from '@angular/core';
import { HttproutingService } from './httprouting.service';

@Injectable({
  providedIn: 'root'
})
export class RegisterserviceService {

  constructor(private httprouting: HttproutingService) { }

  getEmployees(url: any){
    return this.httprouting.getMethod('v1/'+ url);
  }
  createEmployee(url:any, data:string){
    return this.httprouting.postMethod('v1/' + url, data);
  }
}
