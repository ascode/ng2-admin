import { Component, Injectable, OnInit, ViewChild } from '@angular/core';
import { Http, Response } from '@angular/http';
// import {ActivatedRoute,Params} from '@angular/router';
export class DeList {
	constructor(
		public organization_code: string = '',
		public name: string = '',
		public brief_name: string = '',
		public description: string = '',
		public mnemonic_code: string = '',
		public prd_manager_name: string = '',
		public data_status: string = '',
		public prd_creator_name: string = '王饶冀',
	) { }
}
@Component({
	selector: 'DepartmentList',
	templateUrl: './DepartmentList.html',
	// 	providers: [
	//         ProductService,
	//         { provide: TreeviewEventParser, useClass: OrderDownlineTreeviewEventParser },
	//         { provide: TreeviewConfig, useClass: ProductTreeviewConfig }
	//     ]
})

export class DepartmentListComponent {
	DeListData: Object;
	DepartmentList:Array<Object>;
	constructor(private http: Http) {
		this.DepartmentList = [
			{ name: "部门管理", id: 1 ,
			sub: [
					{ name: "部门信息管理", id: 1 },
				] 
		   },
			{ name: "角色管理", id: 2,
		    sub: [
					{ name: "新增角色", id: 2 },
					{ name: "角色权限", id: 2 }
				] },
			{name: "用户管理", id: 3,
				sub: [
					{ name: "新增用户", id: 3 },
					{ name: "用户权限", id: 3 }
				]
			}
		]
		console.log(this.DepartmentList);
	}
	DeListObj = new DeList();
	// 点击事件
	department() {
		let deList = this.DeListObj;
		console.log(deList);
		this.http.post(
			'http://vosung.bgenius.cn:8081/mockjs/11/adduser?',
			JSON.stringify(deList))
			.subscribe((res: Response) => {
				console.log(res);
			});
	}

}
	//  @ViewChild(TreeviewComponent) treeviewComponent: TreeviewComponent;
	//     items: TreeviewItem[];
	//     rows: string[];

	//     constructor(
	//         private service: ProductService
	//     ) { }

	//     ngOnInit() {
	//         this.items = this.service.getProducts();
	//     }

	//     onItemCheckedChange(item: TreeviewItem) {
	//         console.log(item);
	//     }

	//     onSelectedChange(downlineItems: DownlineTreeviewItem[]) {
	//         this.rows = [];
	//         downlineItems.forEach(downlineItem => {
	//             const item = downlineItem.item;
	//             const value = item.value;
	//             const texts = [item.text];
	//             let parent = downlineItem.parent;
	//             while (!_.isNil(parent)) {
	//                 texts.push(parent.item.text);
	//                 parent = parent.parent;
	//             }
	//             const reverseTexts = _.reverse(texts);
	//             const row = `${reverseTexts.join(' -> ')} : ${value}`;
	//             this.rows.push(row);
	//         });
	//     }

	//     removeItem(item: TreeviewItem) {
	//         TreeviewHelper.removeItem(item, this.items);
	//         this.treeviewComponent.raiseSelectedChange();
	//     }