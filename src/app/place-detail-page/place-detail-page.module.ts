import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlaceDetailPagePageRoutingModule } from './place-detail-page-routing.module';

import { PlaceDetailPagePage } from './place-detail-page.page';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlaceDetailPagePageRoutingModule,
    SharedModule,
    RouterModule
  ],
  declarations: [PlaceDetailPagePage]
})
export class PlaceDetailPagePageModule {}
