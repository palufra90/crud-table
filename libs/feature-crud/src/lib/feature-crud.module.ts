import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { FruitListComponent } from './page/fruit-list/fruit-list.component';
import { FruitListComponentModule } from './page/fruit-list/fruit-list.component.module';
import { FruitsEffectsService } from './store/fruits-effects.service';
import { reducer } from './store/fruits.reducers';

@NgModule({
  imports: [
    CommonModule,
    FruitListComponentModule,
    EffectsModule.forFeature([FruitsEffectsService]),
    StoreModule.forFeature('fruits', reducer),

    RouterModule.forChild([
      {
        path: '',
        component: FruitListComponent,
      },
    ]),
  ],
})
export class FeatureCrudModule {}
