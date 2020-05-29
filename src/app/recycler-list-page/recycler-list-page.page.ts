import { Component, OnInit, Renderer2, ElementRef, ViewChild, ViewChildren, AfterViewInit, QueryList } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';
import { LoadingController, AlertController } from '@ionic/angular';
import { DataSharingService } from '../data-sharing.service';
import { switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-recycler-list-page',
  templateUrl: './recycler-list-page.page.html',
  styleUrls: ['./recycler-list-page.page.scss'],
})
export class RecyclerListPagePage implements OnInit, AfterViewInit {
  cityName="Not set"
  stations: any[]
  loading: HTMLIonLoadingElement
  listViewElements: any[]

  @ViewChildren("fav") favs: QueryList<ElementRef>;
  constructor(
    private httpService: HttpService,
    private router: Router,
    private loadingController: LoadingController,
    private renderer2: Renderer2,
    private elementRef: ElementRef,
    private dataSharingService: DataSharingService,
    private alertController: AlertController
  ) { }
 
  //monitor the list of star outline elements
  ngAfterViewInit(){
    this.favs.changes.subscribe(change=>{
        this.listViewElements=change.toArray();
    })
  }

  //show the loading spinner until stations are loaded
  ngOnInit() {
    console.log(this.stations)
    if (!this.stations) {
      this.presentLoading().then(() => {
        //get Stations
        new Promise((resolve, reject) => {
          
          this.dataSharingService._selectedCityObs.pipe(
            switchMap((selectedCity)=>{
              this.cityName=selectedCity
              return this.httpService.getStations(selectedCity);
            })
          )
            .subscribe(stations => {
              this.stations = stations
              resolve(stations);
            })
        }).then(() => {
          this.dismissLoading();
        });
      })
    }


  }

  // when the map button is clicked go to map apage
  onClickStation() {
    this.router.navigateByUrl("/map-view-page")
  }

  //loading spinner
  async presentLoading() {
    this.loading = await this.loadingController.create({
      // cssClass: 'my-custom-class',
      message: 'loading Stations...',
      duration: 5000
    });
    return await this.loading.present();

    // const { role, data } = await loading.onDidDismiss();
    // console.log('Loading dismissed!');
  }
  dismissLoading() {
    this.loading.dismiss().then(() => {
      console.log("loading dismissed")
    });
  }

  //favorites
  toggleFavorite(index) {

    //if already favorite?
    if (this.listViewElements[index].el.style.color=="yellow"){
      this.renderer2.setAttribute(
        this.listViewElements[index].el,
        'name',
        'star-outline'
      )
      this.renderer2.setStyle(
        this.listViewElements[index].el,
        'color',
        ''
      )
      this.presentAlert(`removed ${this.stations[index].name} from favorites`);
    }
    else{
      this.renderer2.setAttribute(
      this.listViewElements[index].el,
      'name',
      'star'
    )
    this.renderer2.setStyle(
      this.listViewElements[index].el,
      'color',
      'yellow'
    )
    this.presentAlert(`added ${this.stations[index].name} to favorites`);
    }
  }

  //alert when favorite is selected deselected
  async presentAlert(message:string) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: `Favorites`,
      subHeader: '',
      message: `${message}`,
      buttons: ['OK']
    });

    await alert.present();
  }

  //navigate to place detail page show detail of sclicked station
  showDetails(station){
    this.dataSharingService.currentDetails=station;
    this.router.navigateByUrl("/place-detail-page")
  }
}
