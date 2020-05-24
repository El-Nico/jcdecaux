import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecyclerListPagePage } from './recycler-list-page.page';

const routes: Routes = [
  {
    path: '',
    component: RecyclerListPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecyclerListPagePageRoutingModule {}
