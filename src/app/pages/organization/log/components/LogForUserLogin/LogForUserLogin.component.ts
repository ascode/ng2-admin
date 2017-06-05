import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'LogForUserLogin',
  templateUrl: './LogForUserLogin.html',
  styleUrls:['./LogForUserLogin.scss']
})

export class LogForUserLoginComponent {
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
      user_unique_id: {
        title: '用户ID',
        type: 'string',
        
      },
      prd_user_name: {
        title: '用户名称',
        type: 'string'
      },
        device_info: {
        title: '操作路径',
        type: 'string'
      },
      username: {
        title: '操作名称',
        type: 'string'
      },
      token: {
        title: '操作说明',
        type: 'string'
      },
      age: {
        title: '数据变化',
        type: 'string'
      }
    }
  };
   shouquan(){
    console.log('授权按钮被点击')
  }
// 请求到表格的数据。
   source: LocalDataSource = new LocalDataSource();
  constructor(private http: Http) {
  let loginList = {
    "pagesize":10,
    "current_page_index":1,
    "query_entity":{
        "prd_user_name":"zzzz",
        "login_time":"2017.03.06",
        "login_type":"登录",
        "event_level":"正常",
        "device_info":"pc端"
    }
}
   this.http.post('http://vosung.bgenius.cn:8081/mockjs/11/userLogin?',JSON.stringify(loginList)).subscribe((res: Response) => {
				let data = res.json().result_data;  
        console.log(data);
        setTimeout(() => {this.source.load(data);},2000);   
          
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

