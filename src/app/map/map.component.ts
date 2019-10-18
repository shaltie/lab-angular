import { Component, OnInit } from '@angular/core';
import {LocationsDataService} from "../locations-data.service";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  public locationsData: Array<any>;

  constructor(private locationsDataService: LocationsDataService) {
    this.locationsData = locationsDataService.getData();
  }


  ngOnInit() {
  }

}
