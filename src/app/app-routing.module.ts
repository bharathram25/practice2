import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeTableComponent } from './core/components/employee-table/employee-table.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { FormsComponent } from './core/components/forms/forms.component';

const routes: Routes = [
  {path:'',redirectTo:'navbar',pathMatch:'full'},
  {path:'navbar',component:NavbarComponent,children:[
    {path:'employeeTable',component:EmployeeTableComponent},
    {path:'form',component:FormsComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
