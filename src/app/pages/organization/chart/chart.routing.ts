import { Routes, RouterModule } from '@angular/router';
import { ChartComponent } from './chart';
import { BasicComponent } from './components/basic';
const routes: Routes = [
 {
    path: '',
    component: ChartComponent,
    children:[
      {path:'basic',component:BasicComponent},
    ]
  }
];

export const routing = RouterModule.forChild(routes);