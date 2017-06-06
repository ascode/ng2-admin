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
      confirmSave: true
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
      Creator_name: {
        title: '创建人',
        type: 'string'
      },
      Create_time: {
        title: '创建时间',
        type: 'string'
      },
      settings: {
        title: '操作',
        type: 'string'
      }
    }
  };
  source: LocalDataSource = new LocalDataSource();
  constructor(private http: Http) {
    let d = {}
    this.http.post('http://192.168.2.238:8000/json/reply/QueryRolesReq', JSON.stringify(d)).subscribe((res: Response) => {
      let data = res.json().result_data;
      console.log(data);
      for (var d in data) {
        console.log(data[d])
        data[d].settings = "操作"
        if (data[d].IsAllowLogin == true) {
          data[d].IsAllowLogin = "是";
        } else if (data[d].IsAllowLogin == false) {
          data[d].IsAllowLogin = "否";
        }
        let time = data[d].Create_time;

        if (time) {
          time = time.replace(/\//g, '');
          //先截取前边的。结果是剩余的。
          let times = time.substring(0, (time.length - 6));//在截掉后边的
          times = eval('new ' + times + ')').toLocaleString().slice(0, 9);
          data[d].Create_time = times

        } else {
          // console.log('不存在')
        }
      }
      setTimeout(() => {
        this.source.load(data);
      }, 2000);
    });
  }
  // onDeleteConfirm(event): void {
  //   if (window.confirm('Are you sure you want to delete?')) {
  //     event.confirm.resolve();
  //   } else {
  //     event.confirm.reject();
  //   }
  // }
  onEditConfirm(event): void {
    event.confirm.resolve();
    let update = event.newData;
    console.log(update);
    // this.http.post('http://192.168.2.238:8000/json/reply/UpdateRoleInfoReq', JSON.stringify(update))
    //   .subscribe((res: Response) => {
    //     console.log(res.json())        
    //   })
  }
}
