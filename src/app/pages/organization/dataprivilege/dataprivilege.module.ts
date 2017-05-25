import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';

import { routing } from './dataprivilege.routing';
import { DataPrivilegeComponent } from './dataprivilege.component';

// DataOperatePrivilegeToUser
import { DataOperatePrivilegeToRoleComponent }  from './components/DataOperatePrivilegeToRole/DataOperatePrivilegeToRole.component';
import { DataOperatePrivilegeToUserComponent }  from './components/DataOperatePrivilegeToUser/DataOperatePrivilegeToUser.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing
  ],
  declarations: [
    DataPrivilegeComponent,
    DataOperatePrivilegeToRoleComponent,
    DataOperatePrivilegeToUserComponent
  ],
})
export class DataPrivilegeModule {}

