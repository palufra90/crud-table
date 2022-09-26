import { Injectable } from '@angular/core';
import { SortDirection } from '@angular/material/sort';

@Injectable({ providedIn: 'root' })
export class SortItemsUtilService {
  sortItems<T>(
    items: T[],
    sortingKey: keyof T,
    direction: SortDirection = 'asc'
  ) {
    return (items || []).sort((a, b) => {
      const aName = a[sortingKey];
      const bName = b[sortingKey];
      if (!aName || !bName) {
        return 0;
      }
      if (aName > bName) {
        return direction !== 'desc' ? 1 : -1;
      }
      if (aName < bName) {
        return direction !== 'desc' ? -1 : 1;
      }
      return 0;
    });
  }
}
