import {Component} from '@angular/core';
// 
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';

import { LocalStorage } from '../local_storage'
@Component({
  selector: 'login',
  templateUrl: './login.html',
  styleUrls: ['./login.scss']
})
export class Login {

  public form:FormGroup;
  public email:AbstractControl;
  public password:AbstractControl;
  public submitted:boolean = false;
  // 验证信息。
  constructor(fb:FormBuilder) {
    this.form = fb.group({
      'email': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
    });

    this.email = this.form.controls['email'];
    this.password = this.form.controls['password'];
  }

  // public onSubmit(values:Object):void {
  //   this.submitted = true;
  //   if (this.form.valid) {
  //     // your code goes here
  //     console.log(values);
  //   }
  // }

  public localStorage = new LocalStorage();

  public onSubmit(values:Object):void {
      
      let email = this.email.value;
      let password = this.password.value;
      // console.log(email)
      // console.log(password)
      if(password == this.localStorage.get(email)){
         alert('登陆成功')
      }else{
        alert('密码错误')
      }
  }
}
