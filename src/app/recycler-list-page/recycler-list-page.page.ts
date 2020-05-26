import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recycler-list-page',
  templateUrl: './recycler-list-page.page.html',
  styleUrls: ['./recycler-list-page.page.scss'],
})
export class RecyclerListPagePage implements OnInit {
stations: any[]
  constructor(
    private httpService: HttpService,
    private router: Router
  ) { }

  ngOnInit() {
    //get Stations
    this.httpService.getDublinStations()
    .subscribe(stations => {
      this.stations=stations
      console.log(stations);
    })
  }

  onClickStation(){
    this.router.navigateByUrl("/map-view-page")
  }
}
