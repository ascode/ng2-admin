import { Component } from '@angular/core';

@Component({
  selector: 'role',
  template: `<router-outlet></router-outlet>`,
})
export class RoleComponent {

}

// import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// import { ViewCell } from 'ng2-smart-table';
// import { LocalDataSource } from 'ng2-smart-table';
// import { Http, Response, RequestOptions, Headers } from '@angular/http';

// @Component({
//   selector: 'button-view',
//   template: `
//     <button (click)="onClick()">{{ renderValue }}</button>
//   `,
// })
// export class ButtonViewComponent implements ViewCell, OnInit {
//   renderValue: string;

//   @Input() value: string | number;
//   @Input() rowData: any;
//   @Output() save: EventEmitter<any> = new EventEmitter();
//   ngOnInit() {
//     this.renderValue = this.value.toString().toUpperCase();
//   }

//   onClick() {
//     this.save.emit(this.rowData);
//   }
// }

// @Component({
//  selector: 'role',
//   template: `<router-outlet></router-outlet>`,
// })
// //  selector: 'basic-example-button-view',
// //   template: `
// //     <ng2-smart-table [settings]="settings" [source]="source"></ng2-smart-table>
// //   `,
// export class RoleComponent implements OnInit {
//   settings = {
//     columns: {
//       Id: {
//         title: 'ID',
//       },
//       Login_name: {
//         title: 'Login_name',
//       },
//       User_name: {
//         title: 'User Name',
//       },
//       Uniqueid: {
//         title: 'Uniqueid',
//       },
//       button: {
//         title: '操作',
//         type: 'custom',
//         renderComponent: ButtonViewComponent,
//         onComponentInitFunction(instance) {
//           instance.save.subscribe(row => {
//             console.log(row)
//           });
//         }
//       },
//     },
//   };

//   source: LocalDataSource = new LocalDataSource();
//   constructor(private http:Http) {
//     let a = {};
//     this.http.post('http://192.168.2.238:8000/json/reply/QueryUsersReq', JSON.stringify(a))
//       .subscribe((res: Response) => {
//         let data = res.json().result_data;
//         for (let k in data) {
//           let time = data[k].InValidTime;
//           if (data[k].IsAllowLogin == true) {
//             data[k].IsAllowLogin = "是";
//           } else if (data[k].IsAllowLogin == false) {
//             data[k].IsAllowLogin = "否";
//           }
//           if (time) {
//             time = time.replace(/\//g, '')
//             let newTime = time.substring(0, time.length - 6)
//             newTime = eval('new ' + newTime + ')').toLocaleString().slice(0, 9);
//             data[k].InValidTime = newTime
//           }
//           data[k].button = "操作"
//         }
//         // setTimeout(() => {
//           // console.log(data);
//           this.source.load(data);
//         // }, 2000)
//       });
//   }

//   ngOnInit() {
//   }

// }