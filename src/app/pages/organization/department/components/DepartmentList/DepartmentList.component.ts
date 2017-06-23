import { Component, OnInit } from '@angular/core';
import { NodeEvent, TreeModel, RenamableNode, Ng2TreeSettings } from 'ng2-tree';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { ActivatedRoute, Params } from '@angular/router';
import * as _ from 'lodash';
declare const alertify: any;
export class DeList {
  constructor(
    public organization_code: string = '',
    public name: string = '',
    public brief_name: string = '',
    public description: string = '',
    public mnemonic_code: string = '',
    public prd_manager_name: string = '',
    public data_status: string = '',
    public prd_creator_name: string = 'zzz',
    public part_name: string = '',
  ) { }
}
@Component({
  selector: 'DepartmentList',
  templateUrl: './DepartmentList.html',
  styleUrls: ['./DepartmentList.scss']
})
export class DepartmentListComponent implements OnInit {
  public pls: TreeModel;
  constructor(private http: Http) {
    // 查询所有部门接口
    this.http.get('http://192.168.2.238:8000/json/reply/QueryAllDepartmentsReq').subscribe((res: Response) => {
      let departList = res.json().departments;
      let data_child = [];
      for (var list in departList) {
        data_child.push({ "value": departList[list].Name});
      }
        this.pls = {
          value: '跟节点',
          children: data_child,
          // children: [
          //   {
          //     value: '部门管理',
          //     children: [
          //       { value: 'AspectJ' },
          //       { value: 'AspectC++' }
          //     ]
          //   },
          // ],
        };
    });
  }

  DeListData: Object;
  public settings: Ng2TreeSettings = {
    rootIsVisible: false
  };
  
  DeListObj = new DeList();
  department(): void {
    let DeList = this.DeListObj;
    // console.log(DeList)
    this.http.post('http://192.168.2.238:8000/json/reply/CreateDepartmentReq',
      JSON.stringify(DeList)).subscribe((res: Response) => {
        // console.log(res);
      });
  }

  // 删除接口
  // delect(): void {
  //   let id = { "Organization_uniqueid": "6D0CA1B6-69A2-4C94-90C6-8946CFB25FB2" }
  //   this.http.post('http://192.168.2.238:8000/json/reply/DeleteDepartmentReq', JSON.stringify(id)).subscribe((res: Response) => {
  //     console.log(res);
  //   });
  // }

  public onNodeRemoved(e: NodeEvent): void {
    DepartmentListComponent.logEvent(e, 'Removed');
    // console.log(e)
  }

  public onNodeMoved(e: NodeEvent): void {
    DepartmentListComponent.logEvent(e, 'Moved');
    // console.log(e)
  }

  public onNodeRenamed(e: NodeEvent): void {
    DepartmentListComponent.logEvent(e, 'Renamed');
    // console.log(e)
  }

  public onNodeCreated(e: NodeEvent): void {
    DepartmentListComponent.logEvent(e, 'Created');
    // console.log(e)
  }

  public onNodeSelected(e: NodeEvent): void {
    DepartmentListComponent.logEvent(e, 'Selected');
    // console.log(e)
  }

  private static logEvent(e: NodeEvent, message: string): void {
    // console.log(e);
    // alertify.message(`${message}: ${e.node.value}`);
  }
  ngOnInit(): void { }
}