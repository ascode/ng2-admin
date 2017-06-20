import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import { LocalDataSource } from 'ng2-smart-table';
@Component({
  selector: 'role-privilege',
  templateUrl: './rolePrivilege.component.html',
  styleUrls: ['./rolePrivilege.component.scss']
})

export class RolePrivilegeComponent {
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
        title: '角色编号',
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
        title: '授权',
        type: 'string'
      }
    }
  };
  shouquan = false;
  //  liulan = false;
  //   shouquan(){
  //       this.liulan = true;
  //     }
  //     goBack(){
  //       this.liulan = false;
  //     }
  goShouquan() {
      this.shouquan = true;
  };
  goBack() {
      this.shouquan = false;
  };

  source: LocalDataSource = new LocalDataSource();
  constructor(private http: Http) {
    let d = {"query_entity":{"Role_uniqueid":"4C2D2E69-5BFE-492E-8C67-210C2AA80984"}}
    this.http.post('http://192.168.2.238:8000/json/reply/QueryRolesReq', JSON.stringify(d)).subscribe((res: Response) => {
      let data = res.json().result_data;     
      console.log(data);
  })
  }
  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
  }