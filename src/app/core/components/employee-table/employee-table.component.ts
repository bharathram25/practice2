import { Component } from '@angular/core';
import { RegisterserviceService } from '../../services/registerservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.scss']
})
export class EmployeeTableComponent {
  constructor(private register: RegisterserviceService,
    private route : Router){}
  datapack:any=[];
  displayedColums: string[]= ['roleId','firstName','lastName','email','alternateEmail','action'];

  ngOnInit(){
    this.register.getEmployees('getEmployees').subscribe((res:any)=>{
    this.datapack = {col: this.displayedColums , value : res.response, icon: ['edit','delete']}
    })
  }

  adduser(){
    this.route.navigate(['/navbar/form'])
  }
}
