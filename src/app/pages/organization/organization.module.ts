import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';

import { OrganizationComponent } from './organization.component';
import { routing } from './organization.routing';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing
  ],

  declarations: [
    OrganizationComponent,
  ]
})
export class OrganizationModule {}