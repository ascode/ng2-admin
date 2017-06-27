import { Inject, Component } from '@angular/core';
import { Routes, Router } from '@angular/router';

import { BaMenuService } from '../theme';
import { PAGES_MENU } from './pages.menu';

import { LocalStorage } from './local_storage';

@Component({
  selector: 'pages',
  template: `
    <ba-sidebar></ba-sidebar>
    <ba-page-top></ba-page-top>
    <div class="al-main">
      <div class="al-content">
        <ba-content-top></ba-content-top>
        <router-outlet></router-outlet>
      </div>
    </div>
    <ba-back-top position="200"></ba-back-top>
    `
})
export class Pages {

  public localStorage = new LocalStorage();


  constructor(private _menuService: BaMenuService) {
  
      console.log("判断是否登录");
      this.localStorage.getObject('userData');
      console.log(this.localStorage.getObject('userData').Id);
      console.log("判断是否登录完成");
      if (this.localStorage.getObject('userData').Id == undefined) {
          console.log("用户没有登录，即将跳转到登录界面");
          // this.router.navigate(['../../'], { relativeTo: this.activatedRoute, queryParamsHandling: 'preserve' });
          console.dir(Router);
          location.href="#/login"
      }
  }

  ngOnInit() {
    this._menuService.updateMenuByRoutes(<Routes>PAGES_MENU);
  }
}
