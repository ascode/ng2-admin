import { Component } from '@angular/core';
import { LogForUserLoginExceptionService } from './LogForUserLoginException.service';
import { LocalDataSource } from 'ng2-smart-table';
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
      id: {
        title: '用户ID',
        type: 'string',
        
      },
      firstName: {
        title: '用户名称',
        type: 'string'
      },
      lastName: {
        title: '操作路径',
        type: 'string'
      },
      username: {
        title: '操作名称',
        type: 'string'
      },
      email: {
        title: '操作说明',
        type: 'string'
      },
      age: {
        title: '数据变化',
        type: 'string'
      }
    }
  };
// 请求到表格的数据。
   source: LocalDataSource = new LocalDataSource();

  constructor(protected service: LogForUserLoginExceptionService) {
    this.service.getData().then((data) => {
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
}
