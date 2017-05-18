import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';

import { routing } from './role.routing';
import { RoleComponent } from './role.component';
import { RoleCreateComponent } from './components/roleCreate/roleCreate.component';
import { RolePeopleComponent } from './components/rolePeople/rolePeople.component';
import { RolePrivilegeComponent } from './components/rolePrivilege/rolePrivilege.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing
  ],
  declarations: [
    RoleComponent,
    RoleCreateComponent,
    RolePeopleComponent,
    RolePrivilegeComponent
  ]
})
export class RoleModule {}

