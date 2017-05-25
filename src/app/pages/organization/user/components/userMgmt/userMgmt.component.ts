import { Component } from '@angular/core';
import { UserMgmtService } from './userMgmt.service' 
import { LocalDataSource } from 'ng2-smart-table';

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
      id: {
        title: '用户姓名',
        type: 'string'
      },
      firstName: {
        title: '用户登陆名',
        type: 'string'
      },
      lastName: {
        title: '是否允许登陆',
        type: 'string'
      },
      username: {
        title: '数据状态',
        type: 'string'
      },
      email: {
        title: '有效期',
        type: 'string'
      },
      age: {
        title: '操作',
        type: 'number'
      }
    }
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(protected service: UserMgmtService) {
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