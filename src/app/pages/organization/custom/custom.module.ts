import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { CommonModule } from '@angular/common';
// 请求服务
import { HttpModule, JsonpModule } from '@angular/http';
import { CustomComponent } from './custom.component';
// 在子组件的模块中，调用子路由，并且自路由中必须用forchild静态方法。
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { CustomRoutingModule } from './custom.routing';

import { CustomRenderComponent } from './custom-render.component';
import { CustomEditorComponent } from './custom-editor.component';
import { ButtonViewComponent , BasicExampleButtonViewComponent } from './basic-example-button-view.component';

const EXAMPLES_COMPONENTS = [
  CustomEditorComponent,
  CustomRenderComponent,
  BasicExampleButtonViewComponent,
  ButtonViewComponent,
];
@NgModule({
  declarations: [
    CustomComponent,   
     ...EXAMPLES_COMPONENTS
  ],
  entryComponents: [
    CustomEditorComponent,
    CustomRenderComponent,
    ButtonViewComponent,
  ],
  imports: [
      FormsModule,
      CommonModule,
      HttpModule,
      Ng2SmartTableModule,
      CustomRoutingModule
  ],
  providers: [],
})
export class CustomModule { }
