import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../../theme/nga.module';
import { DataFilterPipe } from './components/table/datatab/data-filter.pipe';
// import {NgForm} from '@angular/forms';
import { HttpModule } from "@angular/http";
import { Ng2SmartTableModule } from 'ng2-smart-table';
// 必须写
import { DataTableModule } from "angular2-datatable";
import { routing } from './user.routing';
// 子组件
import { UserComponent } from './user.component';
import { UserCreateComponent } from './components/userCreate/userCreate.component';
import { UserMgmtComponent } from './components/userMgmt/userMgmt.component';

import { TableComponent } from './components/table/table.component';
import { DatatabComponent } from './components/table/datatab/datatab.component';
import { DataTablesService } from './components/table/datatab/datatab.service';
// 表格数据
import { UserMgmtService } from './components/userMgmt/userMgmt.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    Ng2SmartTableModule,
    DataTableModule,
    HttpModule,
    // NgForm,
    routing,
  ],
  declarations: [
    UserComponent,
    UserCreateComponent,
    UserMgmtComponent,
    TableComponent,
    DataFilterPipe,
    DatatabComponent,
  ],
  providers: [
    UserMgmtService,
    DataTablesService,
  ]
})
export class UserModule {}

