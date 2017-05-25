import { Routes, RouterModule } from '@angular/router';

import { LogComponent } from './log.component';

import { LogForUserLoginComponent } from './components/LogForUserLogin/LogForUserLogin.component';
import { LogForUserLoginExceptionComponent } from './components/LogForUserLoginException/LogForUserLoginException.component';
import { LogForUserOperateComponent } from './components/LogForUserOperate/LogForUserOperate.component';
import { LogForUserOperateExceptionComponent } from './components/LogForUserOperateException/LogForUserOperateException.component';

const routes: Routes = [
  {
    path: '',
    component: LogComponent,
    children: [
      { path: 'LogForUserLogin', component: LogForUserLoginComponent },
      { path: 'LogForUserLoginException', component: LogForUserLoginExceptionComponent },
      { path: 'LogForUserOperate', component: LogForUserOperateComponent },
      { path: 'LogForUserOperateException', component: LogForUserOperateExceptionComponent },
    ]
  }
];

export const routing = RouterModule.forChild(routes);