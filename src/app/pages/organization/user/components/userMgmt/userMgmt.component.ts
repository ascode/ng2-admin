import { Component } from '@angular/core';
import { UserMgmtService } from './userMgmt.service'
import { LocalDataSource } from 'ng2-smart-table';

import {
  Http,
  Response,
  RequestOptions,
  Headers,
} from '@angular/http';

// import { Http, Response } from '@angular/http';

@Component({
  selector: 'user-mgmt',
  templateUrl: './userMgmt.html',
  styleUrls: ['./userMgmt.scss']
})
export class UserMgmtComponent {
  query: string = '';

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
    },
    delete: {
      deleteButtonContent: '<i class="ion-trash-a"></i>',
      confirmDelete: true
    },
    columns: {
      user_name: {
        title: '用户姓名',
        type: 'string'
      },
      login_name: {
        title: '用户登陆名',
        type: 'string'
      },
      IsAllowLogin: {
        title: '是否允许登陆',
        type: 'string'
      },
      DataStatus: {
        title: '数据状态',
        type: 'string'
      },
      InValidTime: {
        title: '有效期',
        type: 'string'
      },
      creator_name: {
        title: '操作',
        type: 'number'
      }
    }
  };

  source: LocalDataSource = new LocalDataSource();
  data: Object;
  // protected service: UserMgmtService
  constructor(private http: Http) {
    // console.log(this.source);
    // this.service.getData().then((data) => {
    //   // console.log(data);
    //   // this.source.load(data);
    //   
    //   console.log(a);
    // });
    let a = [{ 'name': 'zs' }, { 'name': 'ls' }];
    this.http.post('http://vosung.bgenius.cn:8081/mockjs/14/getUserData?', a)
      .subscribe((res: Response) => {
        // this.data = res.json();
        console.log(res.json())
      });
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}

