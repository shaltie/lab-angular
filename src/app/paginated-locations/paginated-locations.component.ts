import { Component, OnInit } from '@angular/core';
import {LocationsDataService} from "../shared/locations-data.service";
import {PageEvent} from '@angular/material';
import {Subscription} from "rxjs/index";

@Component({
  selector: 'app-paginated-locations',
  templateUrl: './paginated-locations.component.html',
  styleUrls: ['./paginated-locations.component.scss']
})
export class PaginatedLocationsComponent {

  public locationsData: Array<any>;

  length = 0;
  pageSize = 10;
  pageEvent: PageEvent;
  activePageDataChunk = [];
  subscription: Subscription;



  constructor(private locationsDataService: LocationsDataService) { }

  onPageChanged(e) {
    let firstCut = e.pageIndex * e.pageSize;
    let secondCut = firstCut + e.pageSize;
    this.activePageDataChunk = this.locationsData.slice(firstCut, secondCut);
  }


  private updatePaginator(){

    this.activePageDataChunk = this.locationsData.slice(0,this.pageSize);
    this.length = this.locationsData.length;

  }

  ngOnInit() {


    this.subscription = this.locationsDataService.newLocation.subscribe(newLocation => {

      this.locationsData = newLocation;

      this.updatePaginator();

    });
  }


}
