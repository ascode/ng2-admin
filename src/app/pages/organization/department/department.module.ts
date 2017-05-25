import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';

import { routing } from './department.routing';
import { DepartmentComponent } from './department.component';
import { CreateDepartmentComponent } from './components/CreateDepartment/CreateDepartment.component';
import { DepartmentListComponent } from './components/DepartmentList/DepartmentList.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing
  ],
  declarations: [
    DepartmentComponent,
    CreateDepartmentComponent,
    DepartmentListComponent
  ]
})
export class DepartmentModule {}