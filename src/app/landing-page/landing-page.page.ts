import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';
import { DataSharingService } from '../data-sharing.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.page.html',
  styleUrls: ['./landing-page.page.scss'],
})
export class LandingPagePage implements OnInit {
contracts: any[]
  constructor(
    private router: Router,
    private httpService: HttpService,
    private dataSharingService: DataSharingService
  ) { }

  //load list of cities
  ngOnInit() {
    this.httpService.getAllContracts().subscribe(contracts=>{
      this.contracts=contracts;
      console.log(contracts)
    })
  }


  loadStations(){
    //go to the recycler list page
    this.router.navigateByUrl("/recycler-list-page");
  }

  //change the value of selected city
  changedCity(event){
    this.dataSharingService.selectedCity=event.detail.value;
  }
}
