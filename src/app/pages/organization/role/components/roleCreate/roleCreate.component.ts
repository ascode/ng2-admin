import { Component,OnInit,Input, Output,EventEmitter} from '@angular/core';
import { Http, Response } from '@angular/http';
import {ActivatedRoute,Params} from '@angular/router';
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
  templateUrl: './roleCreate.component.html',
})

export class RoleCreateComponent {
   RoleData: Object;
  constructor(private http: Http) {
  }
  roleObj = new Role();
  roleCreate(){
    let role = this.roleObj;
    console.log(role);
    this.http.post('http://192.168.2.238:8000/json/reply/AddRoleInfoReq',
    JSON.stringify(role)).subscribe((res: Response) => {
				// this.RoleData = res.json();
        console.log(res);
			});
  }
}
