import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { FruitTableComponent } from './fruit-table.component';

@NgModule({
  imports: [CommonModule, MatTableModule, MatButtonModule, MatSortModule],
  declarations: [FruitTableComponent],
  exports: [FruitTableComponent],
})
export class FruitTableComponentModule {}
