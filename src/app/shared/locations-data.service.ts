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

  private newLocation = new Subject<LocationItem>();

  private lastIndex = 0;

  constructor(private http:  HttpClient) { }

  getLocations(): Observable<LocationItem[]> {

    return this.http.get(this.DATA_URL)
        .pipe(tap(data => {
          this.lastIndex = data.slice(-1).index;
          this.locationsArray = data.map((item, index) => {
            return {
              index: index,
              name: item.name,
              lat: item && item.coordinates[0],
              long: item && item.coordinates[1]
            }
          })
        }));
  };

  getNewLocation(): Observable<LocationItem> {
    return this.newLocation.asObservable();
  }

  /*removeLocation(id: number) {
    this.todos = this.todos.filter(t => t.id !== id)
  }*/

  addLocation(item: LocationItem) {
    this.lastIndex++;
    item.index = this.lastIndex;
    this.locationsArray.push(item);
    this.newLocation.next(item);
  }


}
