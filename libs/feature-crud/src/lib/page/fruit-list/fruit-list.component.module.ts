import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { FruitListComponent } from './fruit-list.component';

@NgModule({
  imports: [CommonModule, MatTableModule, MatButtonModule, MatSortModule],
  declarations: [FruitListComponent],
  exports: [FruitListComponent],
})
export class FruitListComponentModule {}
