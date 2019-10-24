import { Component, OnInit } from '@angular/core';
import {LocationsDataService, LocationItem} from '../shared/locations-data.service';

@Component({
  selector: 'app-paginated-locations',
  templateUrl: './paginated-locations.component.html',
  styleUrls: ['./paginated-locations.component.scss']
})
export class PaginatedLocationsComponent implements OnInit {

  private locationsData: LocationItem[];

  private length = 0;
  readonly pageSize = 10;
  private activePageDataChunk = [];

  constructor(private locationsDataService: LocationsDataService) { }

  onPageChanged(e) {
    const firstCut = e.pageIndex * e.pageSize;
    const secondCut = firstCut + e.pageSize;
    this.activePageDataChunk = this.locationsData.slice(firstCut, secondCut);
  }

  private updatePaginator() {

    this.activePageDataChunk = this.locationsData.slice(0, this.pageSize);
    this.length = this.locationsData.length;

  }

  ngOnInit() {

    this.locationsDataService.newLocation.subscribe( (locations: LocationItem[]): void  => {

      this.locationsData = locations;

      this.updatePaginator();

    });
  }

}
