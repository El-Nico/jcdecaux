import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlaceDetailPagePage } from './place-detail-page.page';

const routes: Routes = [
  {
    path: '',
    component: PlaceDetailPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlaceDetailPagePageRoutingModule {}
