import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { routing } from './tabletest.routing';
import { TableTest } from './tabletest.component';
import { Table1 } from './components/table1/table1.component';

import { Ng2SmartTableModule } from 'ng2-smart-table';

@NgModule({
  imports: [
    Ng2SmartTableModule,
    CommonModule,
    FormsModule,
    routing
  ],
  declarations: [
    TableTest,
    Table1
  ]
})
export class TableTestModule {}
