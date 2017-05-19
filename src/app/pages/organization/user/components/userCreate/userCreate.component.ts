
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
      public shenheren: string = '',
      public chuangjianren: string = '',
    ){}
  
} 


@Component({
  templateUrl:'./userCreate.html',
})
export class UserCreateComponent {
   userObj = new User()

   onClick(event){
     console.log(this.userObj);
   }
}