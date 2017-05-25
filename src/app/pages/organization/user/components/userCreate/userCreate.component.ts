
import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
export class User {
    constructor(
      public login_name: string = '',
      public user_name : string = '',
      public Password: string = '',
      public ScanCode: string = '',
      public IsEmployee: string = '',
      public IsAllowLogin: string = '',
      public InValidTime: string = '',
      public DataStatus: string = '',
      public Creator_uniqueid: string = '001',
      public creator_name :string ='',
    ){}
} 

@Component({
  templateUrl:'./userCreate.html',
})
export class UserCreateComponent {
  userData:Object;
  constructor(private http : Http) {
    console.log('这是请求')
  }
   userObj = new User()
   onClick(event){
     let userObj = this.userObj;
       console.log(userObj)
     for(let k in userObj){
        if(userObj[k] != ''){
          // console.log(1)
        }else{
          console.log('资料未填写完整')
        }
     }
     this.http.request(' http://vosung.bgenius.cn:8081/mockjs/11/adduser?')
     .subscribe((res:Response) => {
       console.log(res.json())
     })
   }
}