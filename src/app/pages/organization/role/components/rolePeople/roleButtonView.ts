import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ViewCell } from 'ng2-smart-table';
import { LocalDataSource } from 'ng2-smart-table';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

import {DefaultConfig } from '../../../../../config/default_config';

@Component({
  selector: 'button-view',
  template: `
    <button (click)="onClick()" class='clickButton'>{{ renderValue }}</button>
  `,
})
export class RoleButtonViewComponent implements ViewCell, OnInit {
    

  renderValue: string;
  @Input() value: string | number;
  @Input() rowData: any;
  @Output() save: EventEmitter<any> = new EventEmitter();
  ngOnInit() {
    this.renderValue = this.value.toString().toUpperCase();
  }

  onClick() {
    this.save.emit(this.rowData);
    // 吧值传给下边的组件。
    // console.log(this.rowData);
  }
}

@Component({
  selector: 'basic-example-button-view',
  template: `
    <ng2-smart-table [settings]="settings" [source]="source" (editConfirm)="onEditConfirm($event)" (deleteConfirm)="onDeleteConfirm($event)"></ng2-smart-table>
  `,
  //   styleUrls:['./userMgmt.scss']
})
export class RoleBasicExampleButtonViewComponent {
  public config;
  settings = {
    add: {
      addButtonContent: '<i class="ion-ios-plus-outline"></i>',
      createButtonContent: '<i class="ion-checkmark"></i>',
      cancelButtonContent: '<i class="ion-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="ion-edit"></i>',
      saveButtonContent: '<i class="ion-checkmark"></i>',
      cancelButtonContent: '<i class="ion-close"></i>',
      confirmSave: true,
    },
    delete: {
      deleteButtonContent: '<i class="ion-trash-a"></i>',
      confirmDelete: true,
    },
    columns: {
      FName: {
        title: '角色编号',
        type: 'string',
      },
      FCode: {
        title: '角色名称',
        type: 'string',
      },
      IsAllowLogin: {
        title: '角色描述',
        type: 'string',
      },
      Creator_name: {
        title: '创建人',
        type: 'string',
      },
      Create_time: {
        title: '创建时间',
        type: 'string',
      },
      button: {
        title: '操作',
        type: 'custom',
        renderComponent: RoleButtonViewComponent,
        // 这个事件来接收输入值。
        onComponentInitFunction(instance) {
          instance.save.subscribe(row => {
            console.log(row);
          });
        }
      },
    }
  };
  source: LocalDataSource = new LocalDataSource();
  constructor(private http: Http) {
    this.config = new DefaultConfig();
    let a = {};
    this.http.post(this.config.getApiURL() + 'QueryRolesReq', JSON.stringify(a))
      .subscribe((res: Response) => {
        let data = res.json().result_data;
        for (let k in data) {
          let time = data[k].Create_time;
          if (time) {
            time = time.replace(/\//g, '')
            let newTime = time.substring(0, time.length - 6)
            newTime = eval('new ' + newTime + ')').toLocaleString().slice(0, 9);
            data[k].Create_time = newTime
          }
          data[k].button = "成员维护"
        }
        console.log(data);
        this.source.load(data);
      });
  }
  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
  onEditConfirm(event): void {
    event.confirm.resolve();
    let update = event.newData;
    console.log(update);
    this.http.post('http://192.168.2.238:8000/json/reply/UpdateRoleInfoReq', JSON.stringify(update))
      .subscribe((res: Response) => {
        console.log(res.json())        
      })
    // roleShow:boolean = false;
  }
  ngOnInit() { }
}
