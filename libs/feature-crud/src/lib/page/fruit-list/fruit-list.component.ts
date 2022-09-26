import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SortDirection } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { FruitSchema } from '@test/data-access-fruits';
import { BehaviorSubject, Observable, Subject, takeUntil } from 'rxjs';
import { FruitDetailDialogComponent } from '../../components/fruit-detail-dialog/fruit-detail-dialog.component';
import * as act from '../../store/fruits.actions';
import { selectAllFruits } from '../../store/fruits.reducers';

@Component({
  selector: 'my-fruit-list',
  templateUrl: './fruit-list.component.html',
  styleUrls: ['./fruit-list.component.scss'],
})
export class FruitListComponent implements OnInit {
  fruits$!: Observable<FruitSchema[]>;
  onDestroySubject = new Subject<void>();
  dataSource$ = new BehaviorSubject<MatTableDataSource<FruitSchema>>(
    new MatTableDataSource<FruitSchema>([])
  );

  constructor(private _store: Store, private _dialog: MatDialog) {}

  ngOnInit(): void {
    this._store.dispatch(act.fetchFruitsRequest());
    this.fruits$ = this._store.select(selectAllFruits);
    this.fruits$.pipe(takeUntil(this.onDestroySubject)).subscribe({
      next: (fruits) => {
        this.dataSource$.next(new MatTableDataSource(fruits));
      },
    });
  }

  ngOnDestroy() {
    this.onDestroySubject.complete();
    this.onDestroySubject.unsubscribe();
  }

  onSortChanged(event: {
    actualFruits: FruitSchema[];
    active: string;
    direction: SortDirection;
  }) {
    this._store.dispatch(
      act.sortFruitRequest({
        fruits: event.actualFruits,
        active: event.active,
        direction: event.direction,
      })
    );
  }

  onDelete(fruit: FruitSchema) {
    this._store.dispatch(act.deleteFruitRequest({ fruit }));
  }

  onEdit(fruit: FruitSchema) {
    const dialogRef = this._dialog.open(FruitDetailDialogComponent, {
      data: fruit,
      height: '31em',
      width: '30em',
    });
    dialogRef
      .afterClosed()
      .pipe(takeUntil(this.onDestroySubject))
      .subscribe({
        next: (fruit) => {
          if (fruit) {
            console.log(fruit);
          }
        },
      });
  }
}
