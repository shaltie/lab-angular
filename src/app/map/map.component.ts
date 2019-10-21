import { Component, OnInit } from '@angular/core';
import {LocationsDataService} from "../shared/locations-data.service";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  /*public locationsData: Array<any>;
  public centeredLocation = [];

  constructor(private locationsDataService: LocationsDataService) {
     locationsDataService.getLocations().subscribe((data) => {
       this.locationsData = Object.values(data);
       this.centeredLocation = this.locationsData && this.locationsData[0] && this.locationsData[0].coordinates || [];
    });
  }

  selectedMarker = undefined;

  onMarkerClick(markerData){
    this.selectedMarker = markerData;
  }*/

  ngOnInit() {
  }



}
