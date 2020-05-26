import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecyclerListPagePageRoutingModule } from './recycler-list-page-routing.module';

import { RecyclerListPagePage } from './recycler-list-page.page';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecyclerListPagePageRoutingModule,
    SharedModule,
    RouterModule
  ],
  declarations: [RecyclerListPagePage]
})
export class RecyclerListPagePageModule {}
