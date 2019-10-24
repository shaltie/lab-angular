import { Component, OnInit } from '@angular/core';
import {LocationsDataService, LocationItem} from '../shared/locations-data.service';
declare const google: any;

@Component({
  selector: 'app-map-sidebar',
  templateUrl: './map-sidebar.component.html',
  styleUrls: ['./map-sidebar.component.scss']
})
export class MapSidebarComponent implements OnInit {

  private selectedMarker: LocationItem;
  private isSideBarActive = false;

  constructor(private locationsDataService: LocationsDataService) { }

  ngOnInit() {

    this.locationsDataService.selectedLocation.subscribe((selectedMarker: LocationItem): void => {

      this.selectedMarker = selectedMarker;
      this.isSideBarActive = true;

    });

  }

}
