import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../../theme/nga.module';

import { HttpModule } from "@angular/http";
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { routing } from './role.routing';
import { RoleComponent } from './role.component';
import { RoleCreateComponent } from './components/roleCreate/roleCreate.component';
import { RolePrivilegeComponent } from './components/rolePrivilege/rolePrivilege.component';

import { CustomEditorComponent } from './components/rolePeople/custom-editor.component';
import { CustomRenderComponent } from './components/rolePeople/custom-render.component';
import { RolePeopleComponent } from './components/rolePeople/rolePeople.component';
import { RoleButtonViewComponent , RoleBasicExampleButtonViewComponent } from './components/rolePeople/roleButtonView';

const EXAMPLES_COMPONENTS = [
  CustomEditorComponent,
  CustomRenderComponent,
  RolePeopleComponent,
  RoleButtonViewComponent,
  RoleBasicExampleButtonViewComponent
];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    Ng2SmartTableModule,
    HttpModule,
    routing
  ],
  entryComponents: [
    CustomEditorComponent,
    CustomRenderComponent,
    RoleButtonViewComponent,
  ],
  declarations: [
    RoleComponent,
    RoleCreateComponent,
    RolePrivilegeComponent,
    ...EXAMPLES_COMPONENTS
  ],
  providers: []
})
export class RoleModule {}

