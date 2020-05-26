import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapViewPagePageRoutingModule } from './map-view-page-routing.module';

import { MapViewPagePage } from './map-view-page.page';
import { AgmCoreModule } from '@agm/core';
import { SharedModule } from '../shared/shared.module';
import { Router, RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapViewPagePageRoutingModule,
    AgmCoreModule,
    SharedModule,
    RouterModule
  ],
  declarations: [MapViewPagePage]
})
export class MapViewPagePageModule {}
