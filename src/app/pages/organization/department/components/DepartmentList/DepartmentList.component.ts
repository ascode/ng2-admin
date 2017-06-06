// import { Component, OnInit } from '@angular/core';
// import { NodeEvent,TreeModel,Ng2TreeSettings} from 'ng2-tree';

// // require('./ceshi.css');

// // declare const alertify: any;

// @Component({
// 	selector: 'DepartmentList',
// 	templateUrl: './DepartmentList.html',
// 	styleUrls: ['./DepartmentList.scss']
// })
// export class DepartmentListComponent implements OnInit {
//   public settings: Ng2TreeSettings = {
//     rootIsVisible: false
//   };
//   public pls: TreeModel;

//   public ngOnInit(): void {
//     setTimeout(() => {
//       this.pls = {
//         value: '跟节点',
//         children: [
//           {
//             value: '部门管理',
//             children: [
//               { value: 'AspectJ' },
//               { value: 'AspectC++' }
//             ]
//           },
//           {
//             value: '新建部门',
//             children: [
//               { value: 'C++' },
//               { value: 'C#' }
//             ]
//           },
//           {
//             value: '部门列表',
//             children: [
//               { value: 'JavaScript' },
//               { value: 'CoffeeScript' },
//               { value: 'TypeScript' }
//             ]
//           }
//         ],
//       };
//     }, 2000);
//   }

  // public onNodeRemoved(e: NodeEvent): void {
  //   DepartmentListComponent.logEvent(e, 'Removed');
  // }

  // public onNodeMoved(e: NodeEvent): void {
  //   DepartmentListComponent.logEvent(e, 'Moved');
  // }

  // public onNodeRenamed(e: NodeEvent): void {
  //   DepartmentListComponent.logEvent(e, 'Renamed');
  // }

  // public onNodeCreated(e: NodeEvent): void {
  //   DepartmentListComponent.logEvent(e, 'Created');
  // }

  // public onNodeSelected(e: NodeEvent): void {
  //   DepartmentListComponent.logEvent(e, 'Selected');
  // }

  // private static logEvent(e: NodeEvent, message: string): void {
  //   console.log(e);
  //   // alertify.message(`${message}: ${e.node.value}`);
  // }
// }