import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../../theme/nga.module';
// import {NgForm} from '@angular/forms';
import { HttpModule } from  "@angular/http";
import { Ng2SmartTableModule } from 'ng2-smart-table';
// 必须写
import { routing } from './user.routing';
// 子组件
import { UserComponent } from './user.component';
import { UserCreateComponent } from './components/userCreate/userCreate.component';

import { UserMgmtComponent } from './components/userMgmt/userMgmt.component';
import { UserMgmtButtonViewComponent, UserBasicExampleButtonViewComponent } from './components/userMgmt/userButtonView';
// // 表格组件
import { CustomEditorComponent } from './components/userMgmt/custom-editor.component';
import { CustomRenderComponent } from './components/userMgmt/custom-render.component';

const EXAMPLES_COMPONENTS = [
  CustomEditorComponent,
  CustomRenderComponent,
  UserMgmtButtonViewComponent,
  UserBasicExampleButtonViewComponent,
  UserMgmtComponent,
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    Ng2SmartTableModule,
    HttpModule,
    // NgForm,
    routing
  ],
  entryComponents: [
    CustomEditorComponent,
    CustomRenderComponent,
    UserMgmtButtonViewComponent,
  ],
  declarations: [
    UserComponent,
    UserCreateComponent,
    // UserMgmtComponent,
    // CustomEditorComponent,
    // CustomRenderComponent,
    // UserMgmtButtonViewComponent,
    // UserBasicExampleButtonViewComponent
    ...EXAMPLES_COMPONENTS
  ],
  providers: []
})
export class UserModule { }

