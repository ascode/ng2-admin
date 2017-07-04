import { Component } from '@angular/core';
// 
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';

import {DefaultConfig } from '../../config/default_config';

//import { UiModule } from '../ui/ui.module';

import {
  Http,
  Response,
  RequestOptions,
  Headers,
  
} from '@angular/http';

import { LocalStorage } from '../local_storage';

@Component({
  selector: 'login',
  templateUrl: './login.html',
  styleUrls: ['./login.scss']
})
export class Login {

  public form:FormGroup;
  public loginName:AbstractControl;
  public password:AbstractControl;
  public submitted:boolean = false;
  public config;
  
  // 验证信息。
  constructor(private http: Http,fb:FormBuilder) {
    this.form = fb.group({
      'loginName': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(3)])]
    });

    this.loginName = this.form.controls['loginName'];
    this.password = this.form.controls['password'];

    this.config = new DefaultConfig();
  }

  // public onSubmit(values:Object):void {
  //   this.submitted = true;
  //   if (this.form.valid) {
  //     // your code goes here
  //     console.log(values);
  //   }
  // }

  public localStorage = new LocalStorage();


  public onSubmit(value):void {
      this.submitted = true;
      let userData = {
          uid:this.loginName.value,
          pwd:this.password.value,
      };
      this.http.post(this.config.getApiURL() + 'UserLoginReq', JSON.stringify(userData))
      .subscribe((res: Response) => {
          if(res.json().DoFlag){
              console.log('登陆成功')
              this.localStorage.setObject('userData',res.json().userinfo);
              location.href='#'

          }else{
              console.log('用户名或用户密码错误')
          }
          
      });
 
  }

}
