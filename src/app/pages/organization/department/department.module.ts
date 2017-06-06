import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../../theme/nga.module';
import { routing } from './department.routing';
import { DepartmentComponent } from './department.component';
import { CreateDepartmentComponent } from './components/CreateDepartment/CreateDepartment.component';
import { DepartmentListComponent } from './components/DepartmentList/DepartmentList.component';
import { TreeModule } from 'ng2-tree';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    TreeModule,
    routing
  ],
  declarations: [
    DepartmentComponent,
    CreateDepartmentComponent,
    DepartmentListComponent
  ]
})
export class DepartmentModule {}