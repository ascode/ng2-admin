import { Routes, RouterModule } from '@angular/router';

import { OrganizationComponent } from './organization.component';

const routes: Routes = [
  {
    path: '',
    component: OrganizationComponent
  }
];

export const routing = RouterModule.forChild(routes);