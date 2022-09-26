import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { FruitDetailDialogComponent } from './components/fruit-detail-dialog/fruit-detail-dialog.component';
import { FruitListComponent } from './page/fruit-list/fruit-list.component';
import { FruitListComponentModule } from './page/fruit-list/fruit-list.component.module';
import { FruitsEffectsService } from './store/fruits-effects.service';
import { reducer } from './store/fruits.reducers';

@NgModule({
  imports: [
    CommonModule,
    FruitListComponentModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    EffectsModule.forFeature([FruitsEffectsService]),
    StoreModule.forFeature('fruits', reducer),

    RouterModule.forChild([
      {
        path: '',
        component: FruitListComponent,
      },
    ]),
  ],
  declarations: [FruitDetailDialogComponent],
})
export class FeatureCrudModule {}
