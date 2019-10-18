import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LocationsDataService {

  private DATA_URL = '/locations.json';

  public data;



  constructor(private http:  HttpClient) {


  }



  getData(){

    this.http.get(this.DATA_URL).subscribe((data) => this.data=data);

    return [];
  }
}
