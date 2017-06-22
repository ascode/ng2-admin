import { Component } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { EmailValidator, EqualPasswordsValidator } from '../../theme/validators';

import { LocalStorage } from '../local_storage'

@Component({
  selector: 'register',
  templateUrl: './register.html',
  styleUrls: ['./register.scss']
})
// 定义需要的变量。
export class Register {
  public form: FormGroup;
  public name: AbstractControl;
  public email: AbstractControl;
  public password: AbstractControl;
  public repeatPassword: AbstractControl;
  public passwords: FormGroup;
  public submitted: boolean = false;
  constructor(fb: FormBuilder) {
    // 设置表单验证，密码。
    this.form = fb.group({
      'name': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'email': ['', Validators.compose([Validators.required, EmailValidator.validate])],
      'passwords': fb.group({
        'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
        'repeatPassword': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
      }, { validator: EqualPasswordsValidator.validate('password', 'repeatPassword') })
    });
    // 变量赋值，controls：控制。
    this.name = this.form.controls['name'];

    this.email = this.form.controls['email'];
    this.passwords = <FormGroup>this.form.controls['passwords'];
    this.password = this.passwords.controls['password'];
    this.repeatPassword = this.passwords.controls['repeatPassword'];
  }
  public localStorage = new LocalStorage();

  public onSubmit(values: Object): void {
    //   this.submitted = true;
    //   if (this.form.valid) {
    //     // your code goes here
    //     console.log(values);
    //   }
    let email = this.email.value;
    let password = this.password.value;
    let newArr = this.localStorage.key();
    if (newArr.indexOf(email) == -1) {
      this.localStorage.set(email, password);
      alert('注册成功！')
    } else {
      alert('此邮箱已被注册，请更换邮箱')
    }

  }
}
