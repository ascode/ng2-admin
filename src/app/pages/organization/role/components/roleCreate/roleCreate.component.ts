import { Component, OnInit, Output,EventEmitter} from '@angular/core';
import { Http, Response } from '@angular/http';
import {ActivatedRoute} from "@angular/router";
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
  url:string;
  @Output() provinceOut = new EventEmitter();
  constructor(public route: ActivatedRoute) {
    this.url = '下次';
    console.log(this.url)
  }
  // 3.事件出发，发射变量给组件。
  urlChange() {
    // 发给父组件
    this.provinceOut.emit(this.url);
 }
  roleObj = new Role();
  makePost(): void {
    let roleObj = this.roleObj;
    console.log(roleObj);
  }
  

  // ngOnInit() {
  //   this.route.params.subscribe(params => {
  //     //  this.id = params  // {id: "xxx"}
  //     console.log(22)
  //   });
  // }
}
