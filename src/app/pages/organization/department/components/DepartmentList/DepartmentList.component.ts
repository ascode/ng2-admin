import { Component, OnInit } from '@angular/core';
import { NodeEvent, TreeModel, Ng2TreeSettings } from 'ng2-tree';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { ActivatedRoute, Params } from '@angular/router';
declare var $: any;
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
  DeListData: Object;
  public settings: Ng2TreeSettings = {
    rootIsVisible: false
  };
  public pls: TreeModel;
  public ngOnInit(): void {
    setTimeout(() => {
      this.pls = {
        value: '跟节点',
        children: [
          {
            value: '部门管理',
            children: [
              { value: 'AspectJ' },
              { value: 'AspectC++' }
            ]
          },
          {
            value: '新建部门',
            children: [
              { value: 'C++' },
              { value: 'C#' }
            ]
          },
          {
            value: '部门列表',
            children: [
              { value: 'JavaScript' },
              { value: 'CoffeeScript' },
              { value: 'TypeScript' }
            ]
          }
        ],
      };
    }, 2000);
  }
  constructor(private http: Http) {
    this.http.get('http://192.168.2.238:8000/json/reply/QueryAllDepartmentsReq').subscribe((res: Response) => {
      console.log(res.json().departments);   
    });
  }
  DeListObj = new DeList();
  department(): void {
    let DeList = this.DeListObj;
    console.log(DeList)
    this.http.post(
      'http://192.168.2.238:8000/json/reply/CreateDepartmentReq',
      JSON.stringify(DeList)).subscribe((res: Response) => {
        console.log(res);
      });
  }
  public onNodeRemoved(e: NodeEvent): void {
    DepartmentListComponent.logEvent(e, 'Removed');
    console.log(e)
  }

  public onNodeMoved(e: NodeEvent): void {
    DepartmentListComponent.logEvent(e, 'Moved');
    console.log(e)
  }

  public onNodeRenamed(e: NodeEvent): void {
    DepartmentListComponent.logEvent(e, 'Renamed');
    console.log(e)
  }

  public onNodeCreated(e: NodeEvent): void {
    DepartmentListComponent.logEvent(e, 'Created');
    console.log(e)
  }

  public onNodeSelected(e: NodeEvent): void {
    DepartmentListComponent.logEvent(e, 'Selected');
    console.log(e)
  }

  private static logEvent(e: NodeEvent, message: string): void {
    console.log(e);
    // alertify.message(`${message}: ${e.node.value}`);
  }
}