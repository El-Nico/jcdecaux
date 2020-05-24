import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MapViewPagePage } from './map-view-page.page';

describe('MapViewPagePage', () => {
  let component: MapViewPagePage;
  let fixture: ComponentFixture<MapViewPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapViewPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MapViewPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
