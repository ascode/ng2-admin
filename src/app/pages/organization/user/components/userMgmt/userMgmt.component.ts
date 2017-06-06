import { Component } from '@angular/core';
import { UserMgmtService } from './userMgmt.service'
import { LocalDataSource } from 'ng2-smart-table';

import {
  Http,
  Response,
  RequestOptions,
  Headers,
} from '@angular/http';


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
      confirmSave: true
    },
    delete: {
      deleteButtonContent: '<i class="ion-trash-a"></i>',
      confirmDelete: true
    },
    columns: {
      User_name: {
        title: '用户姓名',
        type: 'string'
      },
      Login_name: {
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
      settings: {
        title: '操作',
        type: 'string'
      }
    }
  };

  source: LocalDataSource = new LocalDataSource();
  data: Object;
  constructor(private http: Http) {
    let a = {
      "query_entity": {}
    };
    // this.http.post('http://192.168.2.238:8000/json/reply/QueryUsersReq', JSON.stringify(a))
    //   .subscribe((res: Response) => {
    //     let data = res.json().result_data;
    //     // console.log(data);
    //     for (var d in data) {
    //       // console.log(data[d].InValidTime)
    //       if (data[d].IsAllowLogin == true) {
    //         data[d].IsAllowLogin = "是";
    //       } else if (data[d].IsAllowLogin == false) {
    //         data[d].IsAllowLogin = "否";
    //       }
    //       let time = data[d].InValidTime;
    //       if (time) {
    //         time = time.replace(/\//g, '');
    //         //先截取前边的。结果是剩余的。
    //         let times = time.substring(0, (time.length - 6));//在截掉后边的
    //         times = eval('new ' + times + ')').toLocaleString().slice(0, 9);
    //         data[d].InValidTime = times

    //       } else {
    //         // console.log('不存在')
    //       }
    //       data[d].settings = '操作';
    //     }
    //     setTimeout(() => {
    //       this.source.load(data);
    //     }, 2000);
    //   });
  }
  // 删除的接口。
  // onDeleteConfirm(event): void {
  //   if (window.confirm('Are you sure you want to delete?')) {
  //     let d = { "Uniqueid": event.data.Uniqueid };
  //     this.http.post('http://192.168.2.238:8000/json/reply/removeuserReq', JSON.stringify(d))
  //       .subscribe((res: Response) => {
  //         event.confirm.resolve();
  //       })
  //   } else {
  //     event.confirm.reject();
  //   }
  // }
  // onEditConfirm(event): void {  
  //   //  if (window.confirm('Are you sure you want to edit?')) {
  //      event.confirm.resolve();
  //      let update = event.newData;
  //      console.log(update);
  //     this.http.post('http://192.168.2.238:8000/json/reply/UpdateRoleInfoReq', JSON.stringify(update))
  //       .subscribe((res: Response) => {
  //         console.log(res.json())       
 }




