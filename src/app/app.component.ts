import { Component } from '@angular/core';
import {MapComponent} from './map/map.component';
import {TwoTabsComponent} from './two-tabs/two-tabs.component';
import {LocationsDataService} from "./locations-data.service";

@Component({
  selector: 'app-root',
  template: `<div>
    <router-outlet></router-outlet>
  </div>`,
  styleUrls: ['./app.component.scss'],
  providers: [LocationsDataService]
})
export class AppComponent {

}
