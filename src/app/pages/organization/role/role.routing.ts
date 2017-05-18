import { Routes, RouterModule } from '@angular/router';

import { RoleComponent } from './role.component';
import { RoleCreateComponent } from './components/roleCreate/roleCreate.component';
import { RolePeopleComponent } from './components/rolePeople/rolePeople.component';
import { RolePrivilegeComponent } from './components/rolePrivilege/rolePrivilege.component';

const routes: Routes = [
  {
    path: '',
    component: RoleComponent,
    children: [
      { path: 'rolecreate', component: RoleCreateComponent },
      { path: 'rolepeople', component: RolePeopleComponent },
      { path: 'roleprivilege', component: RolePrivilegeComponent }
    ]
  }
];

export const routing = RouterModule.forChild(routes);