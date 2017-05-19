
import { Component } from '@angular/core';

export class User {
    constructor(
      public name: string = '',
      public psw: string = '',
      public smm: string = '',
      public qiyeUser: string = '',
      public login: string = '',
      public date: string = '',
      public dataZt: string = '',
      public chuangjianren: string = '',
    ){}
  
} 


@Component({
  templateUrl:'./userCreate.html',
})
export class UserCreateComponent {
   userObj = new User()

   onClick(event){
     let userObj = this.userObj;

     for(let k in userObj){
        
        if(userObj[k] != ''){
          console.log(1)
        }else{
          console.log('资料未填写完整')
        }
     }
   }
}