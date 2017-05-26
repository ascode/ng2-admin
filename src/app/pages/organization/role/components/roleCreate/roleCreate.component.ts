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
  templateUrl: './roleCreate.html'
})

export class RoleCreateComponent {
  // 2.参数，定义输出变量。
  //  url:string;
  // @Input() 
  // @Output('url') urlChange:EventEmitter<string> = new EventEmitter<string>();
  constructor(public route: ActivatedRoute) {
    // 发给父组件
    // this.url = '创建角色'
  }
  roleObj = new Role();
  makePost(): void {
    let roleObj = this.roleObj;
  }
  
  // ngOnInit() {
  //   this.route.params.subscribe(params => {
  //     console.log(params)
  //   });
  // }
}
