import { Component } from '@angular/core';
import {LocationsDataService} from './shared/locations-data.service';

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
