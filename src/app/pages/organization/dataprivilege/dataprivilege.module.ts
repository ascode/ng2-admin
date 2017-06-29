import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { NgaModule } from '../../../theme/nga.module';
import { Ng2SmartTableModule } from 'ng2-first-table';
import { FormsModule } from '@angular/forms';
import { routing } from './dataprivilege.routing';
import { DataPrivilegeComponent } from './dataprivilege.component';
import { DataOperatePrivilegeToRoleComponent } from './components/DataOperatePrivilegeToRole/DataOperatePrivilegeToRole.component';
import { DataOperatePrivilegeToUserComponent } from './components/DataOperatePrivilegeToUser/DataOperatePrivilegeToUser.component';
import { DataOperatePrivilegeToUserService } from './components/DataOperatePrivilegeToUser/DataOperatePrivilegeToUser.service';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    Ng2SmartTableModule,
    routing
  ],
  declarations: [
   DataPrivilegeComponent,
   DataOperatePrivilegeToRoleComponent,
   DataOperatePrivilegeToUserComponent
  ],
   providers: [DataOperatePrivilegeToUserService]
})
export class DataPrivilegeModule {}

