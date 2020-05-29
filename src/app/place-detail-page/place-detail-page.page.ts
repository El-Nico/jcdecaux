import { Component, OnInit } from '@angular/core';
import { DataSharingService } from '../data-sharing.service';

@Component({
  selector: 'app-place-detail-page',
  templateUrl: './place-detail-page.page.html',
  styleUrls: ['./place-detail-page.page.scss'],
})
export class PlaceDetailPagePage implements OnInit {
details
  constructor(
    private dataSharingService: DataSharingService
  ) { }

  //will implement a detailed view of each station
  ngOnInit() {
    this.details=this.dataSharingService.currentDetails?this.dataSharingService.currentDetails:"pls go to homepage and select a place"
  }

}
