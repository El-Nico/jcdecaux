import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
_stations:any[];
  constructor(
    private httpClient: HttpClient
  ) {
     
  }

  get stations (){
    return this._stations
  }

  getDublinStations(): Observable<any[]>{
    return this.httpClient.get<any[]>('https://api.jcdecaux.com/vls/v1/stations?contract=dublin&apiKey=58c3f7df449ee36b7a278dde2c381ba85f204d2b')
  }

  getAllContracts(): Observable<any[]>{
    return this.httpClient.get<any[]>('https://api.jcdecaux.com/vls/v1/contracts?apiKey=58c3f7df449ee36b7a278dde2c381ba85f204d2b');
  }

}
