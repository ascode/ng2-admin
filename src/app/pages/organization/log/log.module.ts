import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';

import { routing } from './log.routing';
import { LogComponent } from './log.component';

import { LogForUserLoginComponent } from './components/LogForUserLogin/LogForUserLogin.component';
import { LogForUserLoginExceptionComponent } from './components/LogForUserLoginException/LogForUserLoginException.component';
import { LogForUserOperateComponent } from './components/LogForUserOperate/LogForUserOperate.component';
import { LogForUserOperateExceptionComponent } from './components/LogForUserOperateException/LogForUserOperateException.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing
  ],
  declarations: [
    LogComponent,
    LogForUserLoginComponent,
    LogForUserLoginExceptionComponent,
    LogForUserOperateComponent,
    LogForUserOperateExceptionComponent
  ],
})
export class LogModule {}

