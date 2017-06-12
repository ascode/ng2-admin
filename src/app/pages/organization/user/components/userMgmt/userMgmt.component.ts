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
      // mode:'external',
       confirmSave: true
      // mode:'inline'
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
      creator_name: {
        title: '操作',
        type: 'number'
      }
      
    }
  };

  source: LocalDataSource = new LocalDataSource();
  constructor(private http: Http) {
    let a = {};
    this.http.post('http://192.168.2.238:8000/json/reply/QueryUsersReq', JSON.stringify(a))
      .subscribe((res: Response) => {
        let data = res.json().result_data;
        for (let k in data) {
          let time = data[k].InValidTime;
          if (time) {
            time = time.replace(/\//g, '')
            let newTime = time.substring(0, time.length - 6)
            newTime = eval('new ' + newTime + ')').toLocaleString().slice(0, 9);
            //  console.log();
            data[k].InValidTime = newTime
          }
        }
        setTimeout(() => {
          this.source.load(data);
        }, 2000)
      });
  }

  onDeleteConfirm(event): void {
    if (window.confirm('确定要删除吗?')) {
      let a = { "Uniqueid": event.data.Uniqueid };
      this.http.post('http://192.168.2.238:8000/json/reply/RemoveUserReq', JSON.stringify(a))
        .subscribe((res: Response) => {
          if(res.status == 200){
            event.confirm.resolve();
          }
        });
    } else {
      event.confirm.reject();
      // console.log("不是")
    }
  }

  onEdit(event): void {
    console.log(1);
    // event.confirm.resolve();
    // UpdateUserReq
    // this.http.post('http://192.168.2.238:8000/json/reply/UpdateUserReq', JSON.stringify(a))
    //     .subscribe((res: Response) => {
    //       if(res.status == 200){
    //         event.confirm.resolve();
    //       }
    //     });
    
  }


  onEditConfirm(event):void{
     event.confirm.resolve();
    console.log(2);
  }
}

