import {Injectable} from '@angular/core';

import {HttpClient} from '@angular/common/http';
import {Subject} from "rxjs/index";
import {map} from "rxjs/internal/operators/map";
import {Observable} from "rxjs/index";
import {tap} from 'rxjs/operators';

export interface LocationItem {
  name: string,
  lat: string
  long: string
}


@Injectable({
  providedIn: 'root'
})



export class LocationsDataService {

  private DATA_URL = '/assets/locations.json';

  public locationsArray: LocationItem[] = [];

  constructor(private http:  HttpClient) { }


  getLocations(): Observable<LocationItem[]> {

    return this.http.get<LocationItem[]>(this.DATA_URL)
        .pipe(tap(data => this.locationsArray = data.map(item => {
          return {
            name: item.name,
            lat: 'a',//item.coordinates[0],
            long: 'b'//item.coordinates[1]
          }
        })))
  };

  /*removeLocation(id: number) {
    this.todos = this.todos.filter(t => t.id !== id)
  }*/

  addLocation(item: LocationItem) {
    this.locationsArray.push(item)
  }


}
