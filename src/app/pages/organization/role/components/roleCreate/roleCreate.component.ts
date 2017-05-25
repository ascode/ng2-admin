import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
export class Role {
  constructor(
    public FCode: string = '',
    public FName: string = '',
    public desc: string = '',
    public DataStatus : string ='',
    public creator_uniqueid: string = '001',
    public creator_name: string = 'ZLY'
  ){}
}
@Component({
  // selector: 'role-create',
  templateUrl: './roleCreate.html'
})

export class RoleCreateComponent {
  roleData:Object;
  constructor(private http : Http) {
     console.log('1231324');
  }
  roleObj =new Role()
  onClick(event){
    let roleObj = this.roleObj;
    console.log(roleObj);
  }
}
