import { Component, OnInit } from '@angular/core';
import { DataSharingService } from '../data-sharing.service';
import { HttpService } from '../http.service';
import {switchMap, tap, map} from 'rxjs/operators';


interface MarkerPoint{
  lat: number
  lng: number
}
@Component({
  selector: 'app-map-view-page',
  templateUrl: './map-view-page.page.html',
  styleUrls: ['./map-view-page.page.scss'],
})
export class MapViewPagePage implements OnInit {
  title:string="not set"
  latitude=53.350140;
  longitude=-6.266155

  //lat lng position of all staions
  stations: MarkerPoint[]=[];
  constructor(
    private dataSharingService: DataSharingService,
    private httpService: HttpService
  ) { }

  //get the selected city
  //switch observable to the stations of that city and 
  //return their lat lng coordinate  positions, save to stations variable
  ngOnInit() {
      this.dataSharingService.selectedCityObs()
      .pipe(
        switchMap((selectedCityValue)=>{
          return this.httpService.getStations(selectedCityValue);
        }))
      .subscribe(stations=>{
        stations.forEach(station=>{
          this.stations.push(station.position)
        })
        //default centering lat lng to first station
        this.latitude=this.stations[0].lat
        this.longitude=this.stations[0].lng
        this.title=this.dataSharingService.selectedCity
      })
  }

}
