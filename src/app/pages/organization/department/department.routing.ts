import { Routes, RouterModule } from '@angular/router';
import { DepartmentComponent } from './department.component';
import { CreateDepartmentComponent } from './components/CreateDepartment/CreateDepartment.component';
import { DepartmentListComponent } from './components/DepartmentList/DepartmentList.component';
const routes: Routes = [
  {
    path: '',
    component: DepartmentComponent,
    children:[
      {path:'CreateDepartment',component:CreateDepartmentComponent},
      {path:'DepartmentList',component:DepartmentListComponent},
    ]
  }
];

export const routing = RouterModule.forChild(routes);