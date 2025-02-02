import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {LocationItem, LocationsDataService} from '../shared/locations-data.service';

@Component({
  selector: 'app-add-location-form',
  templateUrl: './add-location-form.component.html',
  styleUrls: ['./add-location-form.component.scss']
})
export class AddLocationFormComponent implements OnInit {

  contactForm: FormGroup;

  private name: string;
  private lat: string;
  private long: string;

  constructor(private locationsDataService: LocationsDataService) { }

  createContactForm() {

    this.contactForm = new FormGroup({
      name: new FormControl(''),
      lat: new FormControl(''),
      long: new FormControl('')
    });

  }

  onClickSubmit() {

    const locationItem: LocationItem = {
      index: undefined,
      name: this.contactForm.value.name,
      lat: this.contactForm.value.lat,
      long: this.contactForm.value.long
    };

    this.locationsDataService.addLocation(locationItem);

  }


  ngOnInit() {

    this.createContactForm();

  }

}
