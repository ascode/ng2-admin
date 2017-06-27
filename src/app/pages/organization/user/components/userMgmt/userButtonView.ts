import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ViewCell } from 'ng2-smart-table';
import { LocalDataSource } from 'ng2-smart-table';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

@Component({
  selector: 'button-view',
  template: `
    <button (click)="onClick()" class='clickButton'>{{ renderValue }}</button>`,
})
export class UserMgmtButtonViewComponent implements ViewCell, OnInit {
  renderValue: string;
  // @Input() xianshi: boolean;
  @Input() value: string | number;
  @Input() rowData: any;
  @Output() save: EventEmitter<any> = new EventEmitter();
  ngOnInit() {
    this.renderValue = this.value.toString().toUpperCase();
  }

  onClick() {
    this.save.emit(this.rowData);
    // this.save.emit(this.xianshi);
    // console.log(this.rowData);
    // location.href = "#/pages/user/usercreate";
  }
}

@Component({
  selector: 'basic-example-button-view',
  template: `
    <ng2-smart-table [settings]="settings"  [source]="source" (editConfirm)="onEditConfirm($event)" (deleteConfirm)="onDeleteConfirm($event)" (save)='onSave($event)'></ng2-smart-table>
  `,
  styleUrls: ['./userMgmt.scss'],
})
export class UserBasicExampleButtonViewComponent implements OnInit {
  // public show: boolean = true;
  @Input() xianshi: boolean;
  // @Output() shows: EventEmitter<boolean> = new EventEmitter();
  // @Output() edit: EventEmitter<any> = new EventEmitter();
  public settings;

  source: LocalDataSource = new LocalDataSource();
  constructor(private http: Http) {
    let athis = this;
    this.settings = {
      add: {
        addButtonContent: '<i class="ion-ios-plus-outline"></i>',
        createButtonContent: '<i class="ion-checkmark"></i>',
        cancelButtonContent: '<i class="ion-close"></i>',
      },
      edit: {
        editButtonContent: '<i class="ion-edit"></i>',
        saveButtonContent: '<i class="ion-checkmark"></i>',
        cancelButtonContent: '<i class="ion-close"></i>',
        confirmSave: true,
      },
      delete: {
        deleteButtonContent: '<i class="ion-trash-a"></i>',
        confirmDelete: true,
      },
      columns: {
        User_name: {
          title: '用户姓名',
          type: 'string',
        },
        Login_name: {
          title: '用户登陆名',
          type: 'string',
        },
        IsAllowLogin: {
          title: '是否允许登陆',
          type: 'string',
        },
        DataStatus: {
          title: '数据状态',
          type: 'string',
        },
        InValidTime: {
          title: '有效期',
          type: 'string',
        },
        button: {
          title: '操作',
          type: 'custom',
          renderComponent: UserMgmtButtonViewComponent,
          onComponentInitFunction(instance) {
            instance.save.subscribe(row => {
              athis.xianshi = !athis.xianshi;
              console.log(athis.xianshi);
            });      
          },
        },
      },
    };
    let a = {};
    this.http.post('http://192.168.2.238:8000/json/reply/QueryUsersReq', JSON.stringify(a))
      .subscribe((res: Response) => {
        let data = res.json().result_data;
        for (let k in data) {
          let time = data[k].InValidTime;
          if (data[k].IsAllowLogin == true) {
            data[k].IsAllowLogin = "是";
          } else if (data[k].IsAllowLogin == false) {
            data[k].IsAllowLogin = "否";
          }
          if (time) {
            time = time.replace(/\//g, '')
            let newTime = time.substring(0, time.length - 6)
            newTime = eval('new ' + newTime + ')').toLocaleString().slice(0, 9);
            data[k].InValidTime = newTime
          }
          data[k].button = "操作";
        }
        setTimeout(() => {
          console.log(data);
          this.source.load(data);
        }, 2000)
      });
  }
  onDeleteConfirm(event): void {
    if (window.confirm('确定要删除吗?')) {
      let a = { "Uniqueid": event.data.Uniqueid };
      this.http.post('http://192.168.2.238:8000/json/reply/RemoveUserReq', JSON.stringify(a))
        .subscribe((res: Response) => {
          if (res.status == 200) {
            event.confirm.resolve();
            window.confirm('删除成功');
          }
        });
    } else {
      event.confirm.reject();
    }
  }
  onEditConfirm(event): void {
    console.log(1)
    event.confirm.resolve();
    console.log(event.newData);
    let update = {
      uniqueid: event.newData.Uniqueid,
      user_name: event.newData.User_name,
      department_unique_id: "部门的全局ID",
      prd_department_name: "性能冗余，部门名称",
      ScanCode: event.newData.ScanCode,
      IsAllowLogin: 0,
      InValidTime: event.newData.InValidTime,
      IsEmployee: 0,
      DataStatus: event.newData.DataStatus,
      last_updater_name: "zzzz",
      last_updater_unique_id: "111",
    }
    console.log(update);
    this.http.post('http://192.168.2.238:8000/json/reply/UpdateRoleInfoReq', JSON.stringify(update))
      .subscribe((res: Response) => {
        console.dir(res.json());
        console.dir(res);
      });
  }
  ngOnInit() { }
};