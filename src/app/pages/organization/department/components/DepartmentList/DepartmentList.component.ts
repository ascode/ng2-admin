import { Component, Injectable, OnInit, ViewChild } from '@angular/core';
import { Http, Response } from '@angular/http';
import { jQuery } from 'jquery/dist/jquery.min';
// import {ActivatedRoute,Params} from '@angular/router';
declare var $: any;
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
		public part_name: string = '',
	) { }
}

@Component({
	selector: 'DepartmentList',
	templateUrl: './DepartmentList.html',
	// templateUrl: './test.html',
	styleUrls: ['./DepartmentList.scss']
})

export class DepartmentListComponent {
	DeListData: Object;
	// DepartmentList: Array<Object>;
	tarArr: Array<Number>;
	depart: Array<Object>;
	nextdepart: Array<Object>;
	constructor(private http: Http) {
		// 定义变量。
		this.tarArr = [];
		this.depart = [];
		this.nextdepart = [];
		let DeListObj = {};
		let nextArr = [];
		let deList = {};
		let DepartmentList = [];
	}
	// 赋初始值。
	DeListObj = {};
	modle = true;
	DepartmentList = [
		{
			"name": "部门管理", "id": 1, "hide": true,
			"sub": [
				{ "name": "部门信息管理", "id": 1, "hide": true, }
			]
		},
		{
			"name": "角色管理", "id": 2, "hide": true,
			"sub": [
				{ "name": "新增角色", "id": 2, "hide": true, },
				{ "name": "角色权限", "id": 2, "hide": true, }
			]
		},
		{
			"name": "用户管理", "id": 3, "hide": true,
			"sub": [
				{ "name": "新增用户", "id": 3, "hide": true, },
				{ "name": "用户权限", "id": 3, "hide": true, }
			]
		},
		{
			"name": "权限管理", "id": 4, "hide": true,
		},
	]
	xian(e, i) {
		// console.log(e.target.className);
		if (e.target.className == 'ion-arrow-right-b') {
			e.target.className = 'ion-arrow-down-b';
			// console.log(e.target.parentNode);
			e.target.parentNode.style = 'color:blue';
			this.tarArr.push(i);
			console.log(this.tarArr);
		} else {
			e.target.className = 'ion-arrow-right-b';
			e.target.parentNode.style = 'color:white';
			let index = this.tarArr.indexOf(i);
			if (index > -1) {
				this.tarArr.splice(index, 1);
			}
			// console.log(this.tarArr);
		}
		// console.log(this.DepartmentList[i]);
		this.DepartmentList[i].hide = !this.DepartmentList[i].hide;
	}

	addNext():void{
		this.modle = false;
		console.log(this.DepartmentList);	
		console.log(this.tarArr);
	  	this.DeListObj = new DeList();
		  console.log(this.DeListObj);
	}
	save():void{
		this.modle = true;
	}
	back():void{
		this.modle = true;
	}
}


























	/*DeListObj = new DeList();
	// 点击事件
	deList = this.DeListObj;	
	department() {
	
		this.http.post(
			'http://vosung.bgenius.cn:8081/mockjs/12/creatlist.json?',
			JSON.stringify(this.deList)).subscribe((res: Response) => {
				console.log(res);
			});
	}
	xian(e, i) {
		// console.log(e.target.className);
		if (e.target.className == 'ion-arrow-right-b') {
			e.target.className = 'ion-arrow-down-b';
			// console.log(e.target.parentNode);
			e.target.parentNode.style = 'color:blue';
			this.tarArr.push(i);
			console.log(this.tarArr);
		} else {
			e.target.className = 'ion-arrow-right-b';
			e.target.parentNode.style = 'color:white';
			let index = this.tarArr.indexOf(i);
			if (index > -1) {
				this.tarArr.splice(index, 1);
			}
			console.log(this.tarArr);
		}
		this.DepartmentList[i].hide = !this.DepartmentList[i].hide;
	}

	modle = true;
	addNext(): void {
		//  console.log(this.tarArr)
		this.modle = false;
		for (var e in this.tarArr) {
			let v = this.tarArr[e];
			// console.log(this.DepartmentList[v]);
			if (this.tarArr.length == 1) {
				// console.log(this.DepartmentList[v]);					
				this.DepartmentList[v].nextArr = this.nextdepart;
				// part_name：不是全局的，点击保存后才能得到值。
				this.nextdepart.push(this.DeListObj.part_name);
				// console.log(this.DeListObj)
				// this.DepartmentList[v].nextArr.push(this.DeListObj.name)
				console.log(this.DepartmentList[v]);
			} else {
				console.log('选择一个');
				// console.log(this.DepartmentList[v]);
			}
		}
	}

	add(): void {
		this.modle = false;
		console.log(this.tarArr)
		for (var e in this.tarArr) {
			let v = this.tarArr[e];
			// console.log(this.DepartmentList[v]);
			if (this.tarArr.length == 1) {
				// console.log(this.DepartmentList[v]);						
				this.DepartmentList[v].arr = this.depart;
				this.depart.push(this.DeListObj);
				// console.log(this.DeListObj)
				// this.DepartmentList[v].nextArr.push(this.DeListObj.name)
				console.log(this.DepartmentList[v]);
				// 晚了一步；
				console.log(this.DepartmentList)
			} else {
				console.log('选择一个');
				// console.log(this.DepartmentList[v]);
			}
		}
	}

	save(): void {
		this.modle = true;
		console.log()
	}
}
*/
