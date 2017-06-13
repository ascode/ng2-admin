import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../../theme/nga.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { routing } from './role.routing';
import { RoleComponent } from './role.component';
import { RoleCreateComponent } from './components/roleCreate/roleCreate.component';
import { RolePeopleComponent } from './components/rolePeople/rolePeople.component';
import { RolePrivilegeComponent } from './components/rolePrivilege/rolePrivilege.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    Ng2SmartTableModule,
    routing
  ],
  declarations: [
    RoleComponent,
    RoleCreateComponent,
    RolePeopleComponent,
    RolePrivilegeComponent
  ],
  providers: []
})
export class RoleModule {}

