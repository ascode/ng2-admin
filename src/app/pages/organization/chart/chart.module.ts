import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { NgaModule } from '../../../theme/nga.module';
import { EchartsNg2Module } from 'echarts-ng2';
import { routing } from './chart.routing';
import { ChartComponent } from './chart';
import { BasicComponent } from './components/basic';
import { EventComponent } from './components/event';
import { PieComponent } from './components/pie';
import { CustomComponent } from './components/custom';
@NgModule({
  imports: [
    CommonModule,
    NgaModule,
    EchartsNg2Module,
    routing,
  ],
  declarations: [   
     ChartComponent,
     BasicComponent,
     EventComponent,
     PieComponent,
     CustomComponent,
  ],
   providers: []
})
export class ChartModule {}