
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
    public pwd: string = '',
    public ScanCode: string = '',
    public IsEmployee: string = '',
    public IsAllowLogin: string = '',
    public InValidTime: string = '',
    public DataStatus: string = '',
    public Creator_uniqueid: string = '00001',
    public Name: string = '部门名称',
    public Organization_uniqueid : string = '',
    public creator_name: string = 'zly',
  ) {}
}

@Component({
  templateUrl: './userCreate.html',
})
export class UserCreateComponent {
  userData: Object;
  borderColor: string;
  dataName: string[] = [];
  bumenArr : string[] = [];
  seleDepartId : string[] = [];
  userObj = new User();
  
  constructor(private http: Http) {
    this.http.get('http://192.168.2.238:8000/json/reply/QueryAllDepartmentsReq').subscribe((res: Response) => {
      let departList = res.json().departments;
      // console.log(departList);
      for(let k in departList){
        this.bumenArr.push(departList[k].Name)
        this.seleDepartId.push(departList[k].Organization_uniqueid)
      }
     
    });
    let a = {};
    this.http.post('http://192.168.2.238:8000/json/reply/QueryUsersReq', JSON.stringify(a))
      .subscribe((res: Response) => {
        let data = res.json().result_data;
        for (var k in data) {
          this.dataName.push(data[k].Login_name);
        }
      });
  }

  makePost(): void {
    // this.userObj.bumenId = this.bumenArr.indexOf(this.userObj.Name)+'';
    let index = this.bumenArr.indexOf(this.userObj.Name)+''
    this.userObj.Organization_uniqueid = this.seleDepartId[index];
    if (this.borderColor != '#33bcff' || this.userObj.pwd == '') {
      console.log('注册出错，请检查后再注册')
    } else {
      let userObj = this.userObj;
      // console.log(userObj);
      this.http.post('http://192.168.2.238:8000/json/reply/AddUserReq',
        JSON.stringify(userObj)).subscribe((res: Response) => {
          this.userData = res.json();
          window.confirm('注册成功')     
        });
    }
  }
  onBlur(event): void {
    if (event.value.length < 4) {
      this.borderColor = 'red';
      console.log('登陆名过短，请输入4位以上的英文字母')
    }
    if (this.dataName.indexOf(event.value) != -1) {
      this.borderColor = 'red';
      console.log('您输入的用户名已被注册，请更换')
    }
  }
  onKeyup(event): void {
    if (event.value.length >= 4) {
      this.borderColor = '#33bcff';
    }
  }
}
