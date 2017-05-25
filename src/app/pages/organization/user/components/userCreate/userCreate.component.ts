
import { Component } from '@angular/core';
import {
  Http,
  Response,
  RequestOptions,
  Headers,
} from '@angular/http';

export class User {
  constructor(
    public login_name: string = '',
    public user_name: string = '',
    public Password: string = '',
    public ScanCode: string = '',
    public IsEmployee: string = '',
    public IsAllowLogin: string = '',
    public InValidTime: string = '',
    public DataStatus: string = '',
    public Creator_uniqueid: string = '00001',
    public creator_name: string = '王饶冀',
  ) { }
}

@Component({
  templateUrl: './userCreate.html',
})
export class UserCreateComponent {
  userData: Object;
  constructor(private http: Http) {
  }

  userObj = new User();
   makePost(): void {
    let userObj = this.userObj;
    this.http.post(
      'http://vosung.bgenius.cn:8081/mockjs/11/adduser?',
      JSON.stringify(userObj))
      .subscribe((res: Response) => {
        this.userData = res.json();
        console.log(this.userData);
      });
  }
}