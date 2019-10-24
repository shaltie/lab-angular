import {Injectable} from '@angular/core';

import {HttpClient} from '@angular/common/http';
import {ReplaySubject} from 'rxjs/index';


export interface LocationItem {
  index: number;
  name: string;
  lat: string;
  long: string;
}

export interface LocationItemFromAPI {
  index: number;
  name: string;
  coordinates: [string];
}

@Injectable({
  providedIn: 'root'
})

export class LocationsDataService {

  private DATA_URL = '/assets/locations.json';

  public locationsArray: LocationItem[];

  public newLocation = new ReplaySubject<LocationItem[]>();

  public selectedLocation = new ReplaySubject<LocationItem>();

  private lastIndex = 0;

  constructor(private http: HttpClient) {

    http.get(this.DATA_URL).subscribe(
        res => {
          const data = res as LocationItemFromAPI[];
          this.lastIndex = data.length;
          this.locationsArray = data.map((item: any, index: number): LocationItem => {
            return {
              index,
              name: item.name,
              lat: item.coordinates[0],
              long: item.coordinates[1]
            };
          });

          this.newLocation.next(this.locationsArray);
        }
    );

  }

  removeLocation(markerIndex): void {
    this.locationsArray = this.locationsArray.filter(item => {
      return item.index !== markerIndex;
    });
    this.newLocation.next(this.locationsArray);
  }

  addLocation(item: LocationItem): void {
    this.lastIndex++;
    item.index = this.lastIndex;
    this.locationsArray.push(item);
    this.newLocation.next(this.locationsArray);
  }

  selectMarker(location: LocationItem): void {
    this.selectedLocation.next(location);
  }

}
