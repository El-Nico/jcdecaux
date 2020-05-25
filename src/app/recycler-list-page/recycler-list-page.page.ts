import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-recycler-list-page',
  templateUrl: './recycler-list-page.page.html',
  styleUrls: ['./recycler-list-page.page.scss'],
})
export class RecyclerListPagePage implements OnInit {
stations: any[]
  constructor(
    private httpService: HttpService
  ) { }

  ngOnInit() {
    //get Stations
    this.httpService.getDublinStations()
    .subscribe(stations => {
      this.stations=stations
      console.log(stations);
    })
  }

  loadData(event){
    setTimeout(() => {
      console.log('Done');
      event.target.complete();

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      // if (data.length == 1000) {
      //   event.target.disabled = true;
      // }
    }, 1000);
  }

}
