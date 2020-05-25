import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'landing-page',
    pathMatch: 'full'
  },
  {
    path: 'landing-page',
    loadChildren: () => import('./landing-page/landing-page.module').then( m => m.LandingPagePageModule)
  },
  {
    path: 'recycler-list-page',
    loadChildren: () => import('./recycler-list-page/recycler-list-page.module').then( m => m.RecyclerListPagePageModule)
  },
  {
    path: 'place-detail-page',
    loadChildren: () => import('./place-detail-page/place-detail-page.module').then( m => m.PlaceDetailPagePageModule)
  },
  {
    path: 'map-view-page',
    loadChildren: () => import('./map-view-page/map-view-page.module').then( m => m.MapViewPagePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
