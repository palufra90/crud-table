import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { FruitSchema } from '@test/data-access-fruits';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { fetchFruitsRequest } from '../../store/fruits.actions';
import { selectAllFruits } from '../../store/fruits.reducers';

@Component({
  selector: 'pl-fruit-list',
  templateUrl: './fruit-list.component.html',
  styleUrls: ['./fruit-list.component.scss'],
})
export class FruitListComponent implements OnInit {
  fruits$!: Observable<FruitSchema[]>;
  onDestroySubject = new Subject<void>();
  dataSource$ = new BehaviorSubject<MatTableDataSource<FruitSchema>>(
    new MatTableDataSource<FruitSchema>([])
  );

  constructor(private _store: Store) {}

  ngOnInit(): void {
    this._store.dispatch(fetchFruitsRequest());
    this.fruits$ = this._store.select(selectAllFruits);
    this.fruits$.subscribe({
      next: (fruits) => {
        this.dataSource$.next(new MatTableDataSource(fruits));
      },
    });
  }
}
