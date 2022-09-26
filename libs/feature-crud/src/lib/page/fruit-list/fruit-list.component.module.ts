import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { LetModule, PushModule } from '@ngrx/component';
import { FruitTableComponentModule } from '../../components/fruit-table/fruit-table.component.module';
import { FruitListComponent } from './fruit-list.component';

@NgModule({
  imports: [
    CommonModule,
    FruitTableComponentModule,
    LetModule,
    MatButtonModule,
    PushModule,
  ],
  declarations: [FruitListComponent],
  exports: [FruitListComponent],
})
export class FruitListComponentModule {}
