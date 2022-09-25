import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
export const routes: Routes = [
  {
    path: 'fruits',
    loadChildren: () =>
      import('@test/feature-crud').then((m) => m.FeatureCrudModule),
  },
  {
    path: '**',
    redirectTo: '/fruits',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      relativeLinkResolution: 'legacy',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
