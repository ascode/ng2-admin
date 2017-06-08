import { Routes, RouterModule } from '@angular/router';

import { TableTest } from './tabletest.component';
import { Table1 } from './components/table1/table1.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: TableTest,
    children: [
        { path: 'table1', component: Table1 }
    ]
  }
];

export const routing = RouterModule.forChild(routes);
