import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapViewPagePageRoutingModule } from './map-view-page-routing.module';

import { MapViewPagePage } from './map-view-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapViewPagePageRoutingModule
  ],
  declarations: [MapViewPagePage]
})
export class MapViewPagePageModule {}
