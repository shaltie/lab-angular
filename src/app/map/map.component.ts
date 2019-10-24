import { Component, OnInit } from '@angular/core';
import {LocationsDataService, LocationItem} from '../shared/locations-data.service';
declare const google: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  private locationsData: LocationItem[];
  private centeredLocation: LocationItem;

  private markers = [];
  private map;
  private mapIsReady = false;
  private isSideBarActive = false;


  constructor(private locationsDataService: LocationsDataService) { }

  selectedMarker;

  onMarkerClick(markerData) {
    this.selectedMarker = markerData;
    this.isSideBarActive = true;
  }

  onMapReady(map) {
    this.map = map;
    this.mapIsReady = true;
    this.initDrawingManager(map);
  }

  addMarkers() {

    if (this.locationsData) {
      for (const location of this.locationsData) {

        const alreadyExists = this.markers.filter(item => {
          return item.index === location.index;
        })[0];

        if (!alreadyExists) {
          const marker = new google.maps.Marker({
            position: new google.maps.LatLng(location.lat, location.long),
            index: location.index,
            map: this.map
          });

          this.markers.push(marker);
        }

      }
    }

  }

  initDrawingManager(map: any) {
    const options = {
      drawingControl: true,
      drawingControlOptions: {
        drawingModes: ['polygon']
      },
      polygonOptions: {
        draggable: true,
        editable: true
      },
      // drawingMode: google.maps.drawing.OverlayType.POLYGON
    };

    const drawingManager = new google.maps.drawing.DrawingManager(options);
    drawingManager.setMap(map);



    this.addMarkers();


    google.maps.event.addListener(drawingManager, 'polygoncomplete', polygon => {

      for (const marker of this.markers) {

        if (google.maps.geometry.poly.containsLocation(marker.getPosition(), polygon)) {

          this.locationsDataService.removeLocation(marker.index);

          marker.setMap(null);

        }

        polygon.setMap(null);
      }


    });
  }

  ngOnInit() {


    this.locationsDataService.newLocation.subscribe((locations: LocationItem[]): void => {

      this.locationsData = locations;
      this.centeredLocation = locations[0];

      if (this.mapIsReady) {
        this.addMarkers();
      }

    });

  }


}
