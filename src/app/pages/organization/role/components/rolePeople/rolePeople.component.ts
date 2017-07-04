import { Component } from '@angular/core';
import { LocalDataSource ,ViewCell} from 'ng2-first-table';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
@Component({
  selector: 'role-people',
  templateUrl: './rolePeople.html',
  styleUrls: ['./rolePeopleUrls.scss']
})

export class RolePeopleComponent {
  roleShow:boolean = false;
  constructor(){}
  show(){
   this.roleShow = !this.roleShow; 
  }
 
}

