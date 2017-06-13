import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './user.component';
import { UserCreateComponent } from './components/userCreate/userCreate.component';
import { UserMgmtComponent } from './components/userMgmt/userMgmt.component';
// import { DatatabComponent } from './components/table/datatab/datatab.component';
const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      { path: 'usercreate', component: UserCreateComponent },
      { path: 'usermgmt', component: UserMgmtComponent },
    ]
  }
];

export const routing = RouterModule.forChild(routes);