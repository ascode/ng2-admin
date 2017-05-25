import { Component } from '@angular/core';

export class Role {
  constructor(
    public FCode: string = '',
    public FName: string = '',
    public desc: string = '',
    public DataStatus: string = '',
    public Creator_uniqueid: string = '00001',
    public creator_name: string = '王饶冀',
  ) { }
}

@Component({
  selector: 'role-create',
  templateUrl: './roleCreate.component.html'
})



export class RoleCreateComponent {
  constructor() {
  }
  
  roleObj = new Role();
   makePost(): void {
    let roleObj = this.roleObj;
    console.log(roleObj);
  }
}
