import { Routes, RouterModule } from '@angular/router';
import { PrivilegeReportComponent } from './privilegereport.component';
import { UserPrivilegeReportComponent } from './components/UserPrivilegeReport/UserPrivilegeReport.component';
const routes: Routes = [
  {
    path: '',
    component: PrivilegeReportComponent,
    children:[
      {path:'UserPrivilegeReport',component:UserPrivilegeReportComponent}
    ]
  }
];

export const routing = RouterModule.forChild(routes);