import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LocationsDataService {

  private DATA_URL = '/assets/locations.json';

  constructor(private http:  HttpClient) {

  }

  getData(){

    return this.http.get(this.DATA_URL);

  }
}
