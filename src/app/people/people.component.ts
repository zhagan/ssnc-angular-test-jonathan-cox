import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {
  people = [{
    id: 1,
    firstName: 'Williams',
    age: 27,
    department: 'Technology',
    version: 1
  }, {
    id: 2,
    firstName: 'Max',
    age: 28,
    department: 'Technology',
    version: 1
  }, {
    id: 3,
    firstName: 'Deryl',
    age: 32,
    department: 'Technology',
    version: 1
  }, {
    id: 4,
    firstName: 'Greg',
    age: 22,
    department: 'Technology',
    version: 1
  }, {
    id: 5,
    firstName: 'Lavinia',
    age: 27,
    department: 'Human Resources',
    version: 1
  }, {
    id: 6,
    firstName: 'Laura',
    age: 22,
    department: 'Human Resources',
    version: 1
  }];
  constructor() { }
  ngOnInit() {
  }
 }
