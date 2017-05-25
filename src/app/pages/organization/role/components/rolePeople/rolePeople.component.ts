import { Component } from '@angular/core';

@Component({
  selector: 'role-people',
  templateUrl: './rolePeople.html',
  styleUrls: ['./rolePeopleUrls.scss']
})

export class RolePeopleComponent {
  public test:string = '<p>Hello</p>';
  constructor() {
  }
  //  ngOnInit() {
  //          this.route.params.subscribe(params => {
  //             //  this.id = params  // {id: "xxx"}
  //             console.log(222)
  //          });
  //      }
}
