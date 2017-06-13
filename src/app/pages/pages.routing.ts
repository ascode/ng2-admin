import { Routes, RouterModule }  from '@angular/router';
import { Pages } from './pages.component';

import { ModuleWithProviders } from '@angular/core';
// noinspection TypeScriptValidateTypes

// export function loadChildren(path) { return System.import(path); };
// 在page页面的所有路由路径
export const routes: Routes = [
  { path: 'login',loadChildren: 'app/pages/login/login.module#LoginModule'},
  {path: 'register',loadChildren: 'app/pages/register/register.module#RegisterModule'},
  {path: 'pages',component: Pages,
    children: [
      { path: 'department', loadChildren: './organization/department/department.module#DepartmentModule' },
      { path: 'user', loadChildren: './organization/user/user.module#UserModule' },
      { path: 'role', loadChildren: './organization/role/role.module#RoleModule' },
      { path: 'dataprivilege', loadChildren: './organization/dataprivilege/dataprivilege.module#DataPrivilegeModule' },
      { path: 'privilegereport', loadChildren: './organization/privilegereport/privilegereport.module#PrivilegeReportModule' },
      { path: 'log', loadChildren: './organization/log/log.module#LogModule' },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
      { path: 'editors', loadChildren: './editors/editors.module#EditorsModule' },
      { path: 'components', loadChildren: './components/components.module#ComponentsModule' },
      { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
      { path: 'ui', loadChildren: './ui/ui.module#UiModule' },
      { path: 'forms', loadChildren: './forms/forms.module#FormsModule' },
      { path: 'tables', loadChildren: './tables/tables.module#TablesModule' },
      { path: 'maps', loadChildren: './maps/maps.module#MapsModule' },
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
