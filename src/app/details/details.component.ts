import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing.service';
import { HousingLocation } from '../housing-location/housing-location.component';
import { FormControl, FormGroup, ReactiveFormsModule }  from '@angular/forms';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
  <article>
    <img class="listing-photo" [src]="housingLocation?.photo"
      alt="Exterior photo of {{housingLocation?.name}}"/>
    <section class="listing-description">
      <h2 class="listing-heading">{{housingLocation?.name}}</h2>
      <p class="listing-location">{{housingLocation?.city}}, {{housingLocation?.state}}</p>
    </section>

    <section class="listing-features">
      <h2 class="section-heading">About this housing location</h2>
      <ul>
        <li>Units available: {{housingLocation?.availableUnits}}</li>
        <li>Does this location have wifi: {{housingLocation?.wifi}}</li>
        <li>Does this location have laundry: {{housingLocation?.laundry}}</li>
      </ul>
    </section>

    <section class="listing-apply">
      <h2 class="section-heading">Apply now to live here</h2>
      <form [formGroup]="applyForm" (submit)="submitApplication()">
        <label for="first-name">First Name</label>
        <input id="first-name" type="text" formControlName="firstName">
        <label for="last-name">Last Name</label>
        <input id="last-name" type="text" formControlName="lastName">
        <label for="email">Email</label>
        <input id="email" type="email" formControlName="email">
        <button type="submit" class="primary">Apply now</button>
      </form>
    </section>

  </article>
`,//housinglocationprpoperties are being accessed with the optional chaining operator (?) which ensures that 
  //the application does not crash if the housinglocation value is null or undefined
  /*the 3rd markup tag is for the form servive's details. A button is created for the application + a label and textbox for each entry.
  (submit)="submitApplication()" is an event handler for the submt application button. () states its an event handler 
  and "" defines the method to execute.*/
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {

  route: ActivatedRoute = inject(ActivatedRoute);
  housingService = inject(HousingService);
  housingLocation: HousingLocation | undefined;

  //creating an object for the form input 
  applyForm = new FormGroup({firstName: new FormControl(''), lastName: new FormControl(''), email: new FormControl('')}); 
  //including 'FormControl' causes the object to shape the form data and provides a default vale. In this case the default alues are empty strings. 

  constructor() {
    const housingLocationId = Number(this.route.snapshot.params['id']);
    this.housingLocation = this.housingService.getHousingLocationById(housingLocationId);
  }

  /*submit application method will execute when submit application is clicked.
  it calles the submitapplication method and passes the values into the method. if there
  is no value, null is passeed into the method for that variable. This is because we assigned the ullish operator (?) 
  if we didn't, an empty string will be passed.*/
  submitApplication() {
    this.housingService.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? ''
    );
  }
}