import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { ViewCell } from 'ng2-smart-table';
import {
  Http,
  Response,
  RequestOptions,
  Headers,
} from '@angular/http';

@Component({
  templateUrl: './userMgmt.html',
})
export class UserMgmtComponent {
  xianshi: boolean = true;
  bumenArr: string[] = [];
  seleDepartId: string[] = [];
  row: Object = {};
  onCheange(dataRow: Object) {
    this.xianshi = dataRow['isShow'];
    this.row = dataRow['row'];
    // console.log(this.row['Prd_department_name']);
    if (this.row['IsEmployee'] == true) {
      this.row['IsEmployee'] = '是';
    } else {
      this.row['IsEmployee'] = '否';
    }
    // if(this.row['IsEmployee']=="是"){
    //   this.row['IsEmployee']== 1;
    // };
    // if(this.row['IsEmployee']=="否"){
    //   console.log(1)
    //   this.row['IsEmployee']== 0;
    // };
  }
  constructor(private http: Http) {
    this.http.get('http://192.168.2.238:8000/json/reply/QueryAllDepartmentsReq').subscribe((res: Response) => {
      let departList = res.json().departments;
      // console.log(departList);
      for (let k in departList) {
        // console.log(departList[k])
        this.bumenArr.push(departList[k].Name);
        this.seleDepartId.push(departList[k].Organization_uniqueid);
      }
    });
  }
  edit() {
    console.log(this.row);  
    let update = {
      uniqueid: this.row['Uniqueid'],
      user_name: this.row['User_name'],
      department_unique_id: this.row['Department_unique_id'],
      prd_department_name: this.row['Prd_department_name'],
      ScanCode: this.row['ScanCode'],
      InValidTime: this.row['InValidTime'],
      IsAllowLogin: 0,
      IsEmployee: 0,
      DataStatus: this.row['DataStatus'],
      last_updater_name: "zzzz",
      last_updater_unique_id: "111",
    };
    console.log(update);
    this.http.post('http://192.168.2.238:8000/json/reply/UpdateRoleInfoReq', JSON.stringify(update))
      .subscribe((res: Response) => {
        console.dir(res.json());
      });
  };
}


