import { Component, OnInit } from '@angular/core';
import {LocationsDataService} from "../shared/locations-data.service";
import {Subscription} from "rxjs/index";
declare const google: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  public locationsData: Array<any>;
  public centeredLocation = [];
  subscription: Subscription;

  constructor(private locationsDataService: LocationsDataService) { }

  selectedMarker;

  onMarkerClick(markerData){
    this.selectedMarker = markerData;
  }



  onMapReady(map) {
    this.initDrawingManager(map);
  }

  initDrawingManager(map: any) {
    const options = {
      drawingControl: true,
      drawingControlOptions: {
        drawingModes: ["polygon"]
      },
      polygonOptions: {
        draggable: true,
        editable: true
      },
      drawingMode: google.maps.drawing.OverlayType.POLYGON
    };

    const drawingManager = new google.maps.drawing.DrawingManager(options);
    drawingManager.setMap(map);

    let markers = [];

    for (let location of this.locationsData) {

      let marker = new google.maps.Marker({
        position: new google.maps.LatLng(location.lat, location.long),
        index: location.index,
        map: map
      });

      markers.push(marker);

      /*google.maps.event.addListener(marker, 'click', (() => {
        alert('f')
      }))*/
    }




    google.maps.event.addListener(drawingManager,'polygoncomplete',polygon => {
      console.log('poly', polygon)

      for (let marker of markers) {
        console.log('is', marker);
        //console.log(marker.getPosition());
        if (google.maps.geometry.poly.containsLocation(marker.getPosition(), polygon)) {
          this.locationsData = this.locationsData.filter(v=>{
            return v.index !== marker.index;

          })
          marker.setMap(null);
        }
      }

      // complete functions

      /*google.maps.event.addListener(thePath, 'set_at', function() {
        // complete functions
      });

      google.maps.event.addListener(thePath, 'insert_at', function() {
        // complete functions
      });*/

    });
  }





  ngOnInit() {

    this.locationsDataService.getLocations().subscribe((data) => {
      this.locationsData = Object.values(data).map((item, i)=>{
        return {
          index: i,
          name: item.name,
          lat: item.coordinates[0],
          long: item.coordinates[1]
        }
      });
      this.centeredLocation = this.locationsData && this.locationsData[0] || {};
    });

    this.subscription = this.locationsDataService.getNewLocation().subscribe(newLocation => {

      this.locationsData.push(newLocation);

    });

  }



}
