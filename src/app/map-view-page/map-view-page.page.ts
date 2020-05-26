import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map-view-page',
  templateUrl: './map-view-page.page.html',
  styleUrls: ['./map-view-page.page.scss'],
})
export class MapViewPagePage implements OnInit {
  latitude=53.350140;
  longitude=-6.266155
  constructor() { }

  ngOnInit() {
  }

}
