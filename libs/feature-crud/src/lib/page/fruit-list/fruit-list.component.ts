import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
export interface UserData {
  id: string;
  name: string;
  progress: string;
  fruit: string;
}

@Component({
  selector: 'pl-fruit-list',
  templateUrl: './fruit-list.component.html',
  styleUrls: ['./fruit-list.component.scss'],
})
export class FruitListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'progress', 'fruit'];
  dataSource: MatTableDataSource<UserData>;
  constructor() {
    const users = [{ id: '1', name: 'Rosa', progress: '200', fruit: 'apple' }];
    this.dataSource = new MatTableDataSource(users);
  }

  ngOnInit(): void {}
}
