import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RecyclerListPagePage } from './recycler-list-page.page';

describe('RecyclerListPagePage', () => {
  let component: RecyclerListPagePage;
  let fixture: ComponentFixture<RecyclerListPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecyclerListPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RecyclerListPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
