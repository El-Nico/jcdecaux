import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

//service class responsible for making http calls
export class HttpService {
_stations:any[];
  constructor(
    private httpClient: HttpClient
  ) {
     
  }

  get stations (){
    return this._stations
  }

  //default dublin
  getDublinStations(): Observable<any[]>{
    return this.httpClient.get<any[]>('https://api.jcdecaux.com/vls/v1/stations?contract=dublin&apiKey=58c3f7df449ee36b7a278dde2c381ba85f204d2b')
  }

  //list of cities where service is operational
  getAllContracts(): Observable<any[]>{
    return this.httpClient.get<any[]>('https://api.jcdecaux.com/vls/v1/contracts?apiKey=58c3f7df449ee36b7a278dde2c381ba85f204d2b');
  }

  //stations for a particular city
  getStations(contract:string): Observable<any[]>{
   return contract ? this.httpClient.get<any[]>(`https://api.jcdecaux.com/vls/v1/stations?contract=${contract}&apiKey=58c3f7df449ee36b7a278dde2c381ba85f204d2b`):this.getDublinStations()
  }

}
