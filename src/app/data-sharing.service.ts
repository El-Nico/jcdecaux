import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
//responsible for passing data between components
export class DataSharingService {
_selectedCity: string= "dublin"
_currentDetails: string
_selectedCityObs: BehaviorSubject<string>= new BehaviorSubject("dublin");
  constructor() { }

  set selectedCity(selectedCity){
    this._selectedCity=selectedCity
    this._selectedCityObs.next(selectedCity)
  }

  get selectedCity(){
    return this._selectedCity;
  }

  //details to be shown on placed detail page
  set currentDetails(details: any){
    this._currentDetails=JSON.stringify(details)
  }

  get currentDetails(){
    return this._currentDetails
  }

  
  //observable will update on city change
  selectedCityObs(){
    return this._selectedCityObs.asObservable()
  }
}
