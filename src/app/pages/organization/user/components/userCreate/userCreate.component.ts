
import { Component } from '@angular/core';
import {
  Http,
  Response,
  RequestOptions,
  Headers,
} from '@angular/http';

import * as _ from 'lodash';

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
    public creator_name: string = 'zly',
  ) { }
}

@Component({
  templateUrl: './userCreate.html',
})
export class UserCreateComponent {
  userData: Object;
  borderColor : string;
  dataArr : string = '';
  constructor(private http: Http) {
  
     let a = {};
      this.http.post('http://192.168.2.238:8000/json/reply/QueryUsersReq', JSON.stringify(a))
      .subscribe((res: Response) => {
          let data = res.json().result_data;
          let dataArr = []; 
          for(var k in data){
            this.dataArr += data[k].Login_name + '+';
          }
        
      });
      
  }
 
  userObj = new User();
  makePost(): void {
    
    if(this.borderColor != '#33bcff'){
        window.confirm('注册出错，请检查后再注册')
    }else{
       let userObj = this.userObj;
        this.http.post(
          'http://192.168.2.238:8000/json/reply/AddUserReq',
          JSON.stringify(userObj)).subscribe((res: Response) => {
            this.userData = res.json();
            window.confirm('注册成功')
          });
        }
   
  }
  onBlur(event):void{
      let arr = this.dataArr.split('+');
      if(event.value.length<4){
        this.borderColor = 'red';
        window.confirm('登陆名过短，请输入4位以上的英文字母')
      }
      if(arr.indexOf(event.value) != -1){
        this.borderColor = 'red';
        window.confirm('您输入的用户名已被注册，请更换')
      }
  }
  onKeyup(event):void{
    if(event.value.length >= 4){
        this.borderColor = '#33bcff';
      }
  }
}
