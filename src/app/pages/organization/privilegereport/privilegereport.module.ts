import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';

import { routing } from './privilegereport.routing';
import { PrivilegeReportComponent } from './privilegereport.component';
import { UserPrivilegeReportComponent } from './components/UserPrivilegeReport/UserPrivilegeReport.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing
  ],
  declarations: [
    PrivilegeReportComponent,
    UserPrivilegeReportComponent
  ]
})
export class PrivilegeReportModule {}
