import { Component } from '@angular/core';
import { LogForUserLoginExceptionService } from './LogForUserLoginException.service';
import { LocalDataSource } from 'ng2-smart-table';

import { Http, Response } from '@angular/http';


@Component({
  selector: 'LogForUserLoginException',
  templateUrl:'./LogForUserLoginException.html',
  styleUrls:['./LogForUserLoginException.scss'] 
})

export class LogForUserLoginExceptionComponent {
  

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
      User_unique_id: {
        title: '用户ID',
        type: 'string',
        
      },
      Prd_user_name: {
        title: '用户名称',
        type: 'string'
      },
      Exception_desc: {
        title: '异常信息',
        type: 'string'
      },
      Token: {
        title: '登录令牌',
        type: 'string'
      },
      Login_type: {
        title: '登录/登出',
        type: 'string'
      },
      Login_time: {
        title: '登录时间',
        type: 'string'
      },
      device_info: {
        title: '设备信息',
        type: 'string'
      }
    }
  };
  shouquan(){
    console.log('授权按钮被点击')
  }
// 请求到表格的数据。
   source: LocalDataSource = new LocalDataSource();

  constructor(protected service: LogForUserLoginExceptionService, private http: Http) {
    this.service.getData(http).then((data) => {
      console.log("结果集:");
      console.dir(data.json().result_data);
      this.source.load(data.json().result_data);   
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