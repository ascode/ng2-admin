import { Routes, RouterModule } from '@angular/router';

import { DataPrivilegeComponent } from './dataprivilege.component';

import { DataOperatePrivilegeToRoleComponent }  from './components/DataOperatePrivilegeToRole/DataOperatePrivilegeToRole.component';
import { DataOperatePrivilegeToUserComponent }  from './components/DataOperatePrivilegeToUser/DataOperatePrivilegeToUser.component';
const routes: Routes = [
  {
    path: '',
    component: DataPrivilegeComponent,
    children: [
      { path: 'DataOperatePrivilegeToRole', component: DataOperatePrivilegeToRoleComponent },
      { path: 'DataOperatePrivilegeToUser', component: DataOperatePrivilegeToUserComponent }
    ]
  }
];

export const routing = RouterModule.forChild(routes);