import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
// http的一个集合。
// import { HttpModule } from '@angular/http';
// import {UserCreateComponent} from '../userCreate/userCreate.component';
import { routing }       from './pages.routing';
import { NgaModule } from '../theme/nga.module';
import { AppTranslationModule } from '../app.translation.module';

import { Pages } from './pages.component';



@NgModule({
  imports: [CommonModule, AppTranslationModule, NgaModule, routing],
  declarations: [Pages]
})
export class PagesModule {}
