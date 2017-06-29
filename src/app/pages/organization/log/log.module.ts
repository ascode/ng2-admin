import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../../theme/nga.module';
import { Ng2SmartTableModule } from 'ng2-first-table';
import { routing } from './log.routing';
import { LogComponent } from './log.component';
import { LogForUserLoginComponent } from './components/LogForUserLogin/LogForUserLogin.component';
import { LogForUserOperateComponent } from './components/LogForUserOperate/LogForUserOperate.component';
import { LogForUserLoginExceptionComponent } from './components/LogForUserLoginException/LogForUserLoginException.component';
import { LogForUserOperateExceptionComponent } from './components/LogForUserOperateException/LogForUserOperateException.component';

import { LogForUserLoginService } from './components/LogForUserLogin/LogForUserLogin.service';
import { LogForUserOperateService } from './components/LogForUserOperate/LogForUserOperate.service';
import { LogForUserLoginExceptionService } from './components/LogForUserLoginException/LogForUserLoginException.service';
import { LogForUserOperateExceptionService } from './components/LogForUserOperateException/LogForUserOperateException.service';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    Ng2SmartTableModule,
    routing
  ],
  declarations: [
   LogComponent,
   LogForUserLoginComponent,
   LogForUserOperateComponent,
   LogForUserLoginExceptionComponent,
   LogForUserOperateExceptionComponent
  ],
  providers:[LogForUserLoginService,LogForUserOperateService,LogForUserLoginExceptionService,LogForUserOperateExceptionService]
})
export class LogModule {}