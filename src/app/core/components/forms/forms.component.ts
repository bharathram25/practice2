import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RegisterserviceService } from '../../services/registerservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent {

  employeeDetailForm!: FormGroup;

  constructor(
    private register : RegisterserviceService,
    private router : Router
  ){}

  ngOnInit(){
    this.formInit();
    this.register.getEmployees('getEmployees').subscribe((res: any)=>{
      // console.log(res);
      // this.employeeDetailForm.patchValue(res.response[0]);
    })
  }


  formInit(){
    this.employeeDetailForm = new FormGroup({
      designationId : new FormControl(null),
      roleId : new FormControl (null),
      firstName : new FormControl (null),
      lastName : new FormControl (null),
      email :new FormControl (null),
      alternateEmail : new FormControl (null),
      dateOfBirth: new FormControl(null),
      dateOfJoin: new FormControl(null)
    })
  }

  onSubmit(){
    if(this.employeeDetailForm.valid){
      this.register.createEmployee('createEmployee', this.employeeDetailForm.value).subscribe((res:any)=>{
        this.employeeDetailForm.reset();
        this.router.navigate(['/navbar/employeeTable']);


      })
    }

  }
}
