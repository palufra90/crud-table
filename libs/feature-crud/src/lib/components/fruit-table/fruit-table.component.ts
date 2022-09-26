import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewChild,
} from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { FruitSchema } from '@test/data-access-fruits';

@Component({
  selector: 'pl-fruit-table',
  templateUrl: './fruit-table.component.html',
  styleUrls: ['./fruit-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FruitTableComponent {
  @Input() dataSource!: MatTableDataSource<FruitSchema>;

  @ViewChild(MatSort) sort?: MatSort;

  displayedColumns: Array<keyof FruitSchema> = [
    'name',
    'genus',
    'family',
    'order',
  ];

  ngAfterViewInit() {
    if (this.sort) {
      this.dataSource.sort = this.sort;
    }
  }
}
