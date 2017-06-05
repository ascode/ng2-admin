import { Component } from '@angular/core';

@Component({
  selector: 'DataOperatePrivilegeToRole',
  templateUrl:'./DataOperatePrivilegeToRole.html',
  styleUrls:['./DataOperatePrivilegeToRole.scss']
})

export class DataOperatePrivilegeToRoleComponent {
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
        title: '编号',
        type: 'string'
      },
      firstName: {
        title: '视图名称',
        type: 'string'
      },
      lastName: {
        title: '全部字段',
        type: 'string'
      },
      username: {
        title: '授权字段',
        type: 'string'
      },
      email: {
        title: '授权说明',
        type: 'string'
      },
      age: {
        title: '操作',
        type: 'string'
      }
    }
  };
   privilege = true;
  //  source: LocalDataSource = new LocalDataSource();

  // constructor(protected service: RolePrivilegeService) {
    
  //   this.service.getData().then((data) => {
  //     this.source.load(data);   
  //   });
     
  // }

  // onDeleteConfirm(event): void {
  //   if (window.confirm('Are you sure you want to delete?')) {
  //     event.confirm.resolve();
  //   } else {
  //     event.confirm.reject();
  //   }
  // }
}