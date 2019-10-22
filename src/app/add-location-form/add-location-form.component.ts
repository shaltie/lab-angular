import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {LocationItem, LocationsDataService} from "../shared/locations-data.service";
import {Subscription} from "rxjs/index";

@Component({
  selector: 'app-add-location-form',
  templateUrl: './add-location-form.component.html',
  styleUrls: ['./add-location-form.component.scss']
})
export class AddLocationFormComponent implements OnInit {

  contactForm: FormGroup;

  constructor(private locationsDataService: LocationsDataService) { }

  createContactForm(){

    this.contactForm = new FormGroup({
      name: new FormControl(''),
      lat: new FormControl(''),
      long: new FormControl('')
    });

  }

  onClickSubmit() {

    const locationItem: LocationItem = {
      name: this.contactForm.value.name,
      lat: this.contactForm.value.lat,
      long: this.contactForm.value.long
    };

    this.locationsDataService.addLocation(locationItem);

    console.log(locationItem);

  }


  ngOnInit() {

    this.createContactForm();

  }

}
