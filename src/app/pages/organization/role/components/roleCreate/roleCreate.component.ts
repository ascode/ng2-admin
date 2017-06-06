import { Component,OnInit,Input, Output,EventEmitter} from '@angular/core';
import {
  Http,
  Response,
  RequestOptions,
  Headers,
} from '@angular/http';
import {ActivatedRoute,Params} from '@angular/router';
export class Role {
  constructor(
    public FCode: string = '',
    public FName: string = '',
    public desc: string = '',
    public data_status: string = '',
    public Creator_uniqueid: string = '00001',
    public creator_name: string = '王饶冀',
  ) { }
}

@Component({
  selector: 'role-create',
  templateUrl: './roleCreate.component.html'
})

export class RoleCreateComponent {
   RoleData: Object;
  constructor(private http: Http) {
  }
  roleObj = new Role();
  roleCreate(){
    let role = this.roleObj;
    console.log(role);
    this.http.post('http://192.168.2.238:8000/json/reply/addRoleInfoReq',
    JSON.stringify(role)).subscribe((res: Response) => {
        console.log(res)
			});
  }
  
  // ngOnInit() {
  //   this.route.params.subscribe(params => {
  //     console.log(params)
  //   });
  // }
}
