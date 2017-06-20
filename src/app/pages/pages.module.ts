import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
// http的一个集合。
// import { HttpModule } from '@angular/http';
import { routing }       from './pages.routing';
import { NgaModule } from '../theme/nga.module';
import { AppTranslationModule } from '../app.translation.module';
import { Pages } from './pages.component';
// 表格组件



@NgModule({
  imports: [CommonModule, AppTranslationModule, NgaModule, routing],
  declarations: [Pages]
})
export class PagesModule {}
