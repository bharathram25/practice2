import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeTableComponent } from './components/employee-table/employee-table.component';
import { FormsComponent } from './components/forms/forms.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AppRoutingModule } from '../app-routing.module';
import { MaterialModule } from '../material/material.module';
import { ParentTableComponent } from './components/parent-table/parent-table.component';
import { DepartComponent } from './components/depart/depart.component';



@NgModule({
  declarations: [
    ParentTableComponent,
    EmployeeTableComponent,
    FormsComponent,
    NavbarComponent,
    DepartComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    AppRoutingModule
  ],
  exports: [
    ParentTableComponent,
    EmployeeTableComponent,
    FormsComponent,
    NavbarComponent
  ]
})
export class CoreModule { }
