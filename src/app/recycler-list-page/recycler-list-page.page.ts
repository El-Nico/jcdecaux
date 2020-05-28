import { Component, OnInit, Renderer2, ElementRef, ViewChild, ViewChildren, AfterViewInit, QueryList } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-recycler-list-page',
  templateUrl: './recycler-list-page.page.html',
  styleUrls: ['./recycler-list-page.page.scss'],
})
export class RecyclerListPagePage implements OnInit, AfterViewInit {
  stations: any[]
  loading: HTMLIonLoadingElement
  listViewElements: any[]

  @ViewChildren("fav") favs: QueryList<ElementRef>;
  constructor(
    private httpService: HttpService,
    private router: Router,
    private loadingController: LoadingController,
    private renderer2: Renderer2,
    private elementRef: ElementRef
  ) { }
 
  ngAfterViewInit(){
    this.favs.changes.subscribe(change=>{
        this.listViewElements=change.toArray();
    })
  }

  ngOnInit() {
    console.log(this.stations)
    if (!this.stations) {
      this.presentLoading().then(() => {
        //get Stations
        new Promise((resolve, reject) => {
          this.httpService.getDublinStations()
            .subscribe(stations => {
              this.stations = stations
              console.log(stations);
              resolve(stations);
            })
        }).then(() => {
          this.dismissLoading();
        });
      })
    }


  }

  onClickStation() {
    this.router.navigateByUrl("/map-view-page")
  }

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

  toggleFavorite(index) {
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
    console.log("toggling fav")
  }
}
