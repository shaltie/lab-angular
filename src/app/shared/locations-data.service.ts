import {Injectable} from '@angular/core';

import {HttpClient} from '@angular/common/http';
import {map} from "rxjs/internal/operators/map";
import {Subject, Observable, of, BehaviorSubject} from "rxjs";
import {tap} from 'rxjs/operators';


export interface LocationItem {
  index: number,
  name: string,
  lat: string
  long: string
}


@Injectable({
  providedIn: 'root'
})



export class LocationsDataService {

  private DATA_URL = '/assets/locations.json';

  public locationsArray: LocationItem[];

  public newLocation = new Subject();

  private lastIndex = 0;

  constructor(private http:  HttpClient) {

    http.get(this.DATA_URL).subscribe(
        res => {
          let data = res as LocationItem[];
          this.lastIndex = data.length;
          this.locationsArray = data.map((item, index) => {
            return {
              index: index,
              name: item.name,
              lat: item.coordinates[0],
              long: item.coordinates[1]
            }
          });

          this.newLocation.next(this.locationsArray);
        }
    );

  }

  removeLocation(markerIndex) {
    this.locationsArray = this.locationsArray.filter(item => {
      return item.index !== markerIndex;
    });
    this.newLocation.next(this.locationsArray);
  }

  addLocation(item: LocationItem) {
    this.lastIndex++;
    item.index = this.lastIndex;
    this.locationsArray.push(item);
    this.newLocation.next(this.locationsArray);
  }


}
