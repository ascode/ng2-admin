import { Component } from '@angular/core';


@Component({
  selector: 'role-people',
  templateUrl: './rolePeople.html',
  styleUrls: ['./rolePeopleUrls.scss']
})

export class RolePeopleComponent {


  constructor(){ 
  }
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
        title: '编号',
        type: 'string'
      },
      firstName: {
        title: '角色名称',
        type: 'string'
      },
      lastName: {
        title: '角色描述',
        type: 'string'
      },
      username: {
        title: '创建人',
        type: 'string'
      },
      email: {
        title: '创建时间',
        type: 'string'
      },
      age: {
        title: '操作',
        type: 'string'
      }
    }
  };

  //  source: LocalDataSource = new LocalDataSource();

  // constructor(protected service: RolePrivilegeService) {
    
  //   this.service.getData().then((data) => {
  //     this.source.load(data);   
  //   });
     
  // }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
