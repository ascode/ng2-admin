import { Component, OnInit } from '@angular/core';
import { NodeEvent, TreeModel, RenamableNode, Ng2TreeSettings } from 'ng2-tree';
declare const alertify: any;
@Component({
	selector: 'CreateDepartment',
	templateUrl: `./tree.html`,
	styles: [`
   .tree-demo-app {
      margin: auto;
      width: -moz-fit-content;
      width: -webkit-fit-content;
      width: fit-content;
    }
    .tree-demo-app .tree-container {
      float: left;
      vertical-align: top;
      width: 500px;
    }
    .tree-title {
      color: #40a070;
      font-size: 2em;
    }
    .notice {
      color: #e91e63;
      font-size: 1.2em;
      font-style: italic;
    }
  `]
})

export class CreateDepartmentComponent {
	public settings: Ng2TreeSettings = {
		rootIsVisible: false //控制根节点显隐
	};
	public pls: TreeModel;
	public ngOnInit(): void {
		setTimeout(() => {
			this.pls = {
				value: '根节点',
				children: [
					{
						value: '部门管理',
						children: [
							{ value: '创建部门' },
							{ value: '部门信息管理' }
						]
					},
					{
						value: '用户管理',
						children: [
							{
								value: {
									name: 'Java',
									setName(name: string): void {
										this.name = name;
									},
									toString(): string {
										return this.name;
									}
								} as RenamableNode
							},
							{ value: '创建用户' },
							{ value: '用户信息' }
						]
					},
					{
						value: '角色管理',
						children: [
							{ value: '创建角色' },
							{ value: '角色信息' }
						]
					}
				]
			};
		}, 1000);
	}
	// 删除
	public onNodeRemoved(e: NodeEvent): void {
		CreateDepartmentComponent.logEvent(e, 'Removed');
	}
	// 移动
	public onNodeMoved(e: NodeEvent): void {
		CreateDepartmentComponent.logEvent(e, 'Moved');
	}
    // 修改名字
	public onNodeRenamed(e: NodeEvent): void {
		CreateDepartmentComponent.logEvent(e, 'Renamed');
		console.log(e.node.value);
	}
	// 新建
	public onNodeCreated(e: NodeEvent): void {
		CreateDepartmentComponent.logEvent(e, 'Created');
		console.log(e.node.value);
	}
	// 选中者
	public onNodeSelected(e: NodeEvent): void {
		CreateDepartmentComponent.logEvent(e, 'Selected');
		console.log(e.node.value);
	}
    // 所有鼠标右键的操作都在这里得到。
	private static logEvent(e: NodeEvent, message: string): void {
		// alertify.message(`${message}: ${e.node.node.value}`);
		console.log(e);//得到新的和旧的值。	
		console.log(e.node.value);
	}
}	