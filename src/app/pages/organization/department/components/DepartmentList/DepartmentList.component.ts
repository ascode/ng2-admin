import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'DepartmentList',
	templateUrl:'./DepartmentList.component.html'
})


export class DepartmentListComponent  {
	obj : Object;
	constructor(){
		this.obj = [
			{
				name:'张凌彦',
				age:'18',
				duixiang:'王饶冀'
			},
			{
				name:'王饶冀',
				age:'20',
				duixiang:'张凌彦'
			}
		]

		for(var k in this.obj){
			console.log(this.obj[k].name + '的对象是：' + this.obj[k].duixiang)
		}
	}
}