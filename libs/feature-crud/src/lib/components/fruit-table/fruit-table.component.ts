import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { MatSort, Sort, SortDirection } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { FruitSchema } from '@test/data-access-fruits';

@Component({
  selector: 'my-fruit-table',
  templateUrl: './fruit-table.component.html',
  styleUrls: ['./fruit-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FruitTableComponent {
  @Input() dataSource!: MatTableDataSource<FruitSchema>;

  @Output() delete = new EventEmitter<FruitSchema>();
  @Output() edit = new EventEmitter<FruitSchema>();
  @Output() sortChanged = new EventEmitter<{
    actualFruits: FruitSchema[];
    active: string;
    direction: SortDirection;
  }>();

  @ViewChild(MatSort) sort!: MatSort;

  displayedColumns: string[] = ['name', 'genus', 'family', 'order', 'actions'];

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  onSortChanged(sortState: Sort) {
    this.sortChanged.emit({
      actualFruits: this.dataSource.data,
      ...sortState,
    });
  }
}
