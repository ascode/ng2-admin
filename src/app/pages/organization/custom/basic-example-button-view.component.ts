import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ViewCell } from 'ng2-smart-table';
import { LocalDataSource } from 'ng2-smart-table';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

@Component({
  selector: 'button-view',
  template: `
    <button (click)="onClick()">{{ renderValue }}</button>
  `,
})
export class ButtonViewComponent implements ViewCell, OnInit {
  renderValue: string;

  @Input() value: string | number;
  @Input() rowData: any;
  @Output() save: EventEmitter<any> = new EventEmitter();
  ngOnInit() {
    this.renderValue = this.value.toString().toUpperCase();
  }

  onClick() {
    this.save.emit(this.rowData);
  }
}

@Component({
  selector: 'basic-example-button-view',
  template: `
    <ng2-smart-table [settings]="settings" [source]="source"></ng2-smart-table>
  `,
})
export class BasicExampleButtonViewComponent implements OnInit {
  settings = {
    columns: {
      Id: {
        title: 'ID',
      },
      Login_name: {
        title: 'Login_name',
      },
      User_name: {
        title: 'User Name',
      },
      Uniqueid: {
        title: 'Uniqueid',
      },
      button: {
        title: '操作',
        type: 'custom',
        renderComponent: ButtonViewComponent,
        onComponentInitFunction(instance) {
          instance.save.subscribe(row => {
            // console.log(2)
          });
        }
      },
    },
  };
     source=[
     {
       "Id":'1',
       "button":'hhh'
     }
   ]
  constructor() {
    
   }
  ngOnInit() {
  }

}