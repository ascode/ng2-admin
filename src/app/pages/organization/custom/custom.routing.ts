import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
// 
import { CustomComponent } from './custom.component';


const customRoutes : Routes = [
    { path :'custom', component:CustomComponent}
]

@NgModule({
    imports:[
        RouterModule.forChild(customRoutes)
    ],
    exports:[RouterModule]
})

export class CustomRoutingModule {};