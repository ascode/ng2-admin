import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../../theme/nga.module';
import { routing } from './user.routing';
import { UserComponent } from './user.component';
import { UserCreateComponent } from './components/userCreate/userCreate.component';
import { UserMgmtComponent } from './components/userMgmt/userMgmt.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    routing
  ],
  declarations: [
    UserComponent,
    UserCreateComponent,
    UserMgmtComponent
  ]
})
export class UserModule {}

