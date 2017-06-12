import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../../theme/nga.module';
// import {NgForm} from '@angular/forms';
import { HttpModule } from "@angular/http";
import { Ng2SmartTableModule } from 'ng2-smart-table';
// 必须写
import { routing } from './user.routing';
// 子组件
import { UserComponent } from './user.component';
import { UserCreateComponent } from './components/userCreate/userCreate.component';
import { UserMgmtComponent } from './components/userMgmt/userMgmt.component';

// 表格数据
import { UserMgmtService } from './components/userMgmt/userMgmt.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    Ng2SmartTableModule,
    HttpModule,
    // NgForm,
    routing
  ],
  declarations: [
    UserComponent,
    UserCreateComponent,
    UserMgmtComponent,
  ],
  providers: [
    UserMgmtService,
  ]
})
export class UserModule {}

