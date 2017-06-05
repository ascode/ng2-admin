import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import { LocalDataSource } from 'ng2-smart-table';
@Component({
  selector: 'role-people',
  templateUrl: './rolePeople.html',
  styleUrls: ['./rolePeopleUrls.scss']
})

export class RolePeopleComponent {
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
      FCode: {
        title: '编号',
        type: 'string'
      },
      FName: {
        title: '角色名称',
        type: 'string'
      },
      desc: {
        title: '角色描述',
        type: 'string'
      },
      creator_name: {
        title: '创建人',
        type: 'string'
      },
      creator_time: {
        title: '创建时间',
        type: 'string'
      },
      age: {
        title: '操作',
        type: 'string'
      }
    }
  };
   source: LocalDataSource = new LocalDataSource();
  constructor(private http: Http) {
   this.http.get('http://vosung.bgenius.cn:8081/mockjs/11/tabledata.json?').subscribe((res: Response) => {
				let data = res.json().obj;     
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
