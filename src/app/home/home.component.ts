import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component'; 
//this is added the new housing component into the home component -nested components  
import { Housinglocation } from '../housinglocation'; //This creates an instance of the houselocation nsterface and allows homeComponent to use it

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent], //everything imported has to be added to the import array
  template: `
  <section>
    <form>
      <input type="text" placeholder="Filter by city">
      <button class="primary" type="button">Search</button>
    </form>
  </section>

  <section class="results">
    <app-housing-location [housinglocation]="housingLocation"></app-housing-location>
  </section>
`, 
//The first section creates a search bar that filters by city and adds a button to search
//The second section adds the housing location to the home template
/*In the second part, [housingLocation]="housingLocation" is called property binding. It is 
in the format [attribute] = "value". "value" is thr name of the property in the specific component. 
property binding allows you to connet a variable to an input() in angular*/
styleUrls: ['./home.component.css']
})

export class HomeComponent {
  /*add housinglocation of type housing loctaion to 
  ensure that the data matches the description of the interface.*/
  housingLocation: Housinglocation = {
    id:9999,
    name: 'Test Home',
    city: 'Test City',
    state: 'ST',
    photo: 'assets/example-house.jpg',
    availableUnits: 99,
    wifi: true,
    laundry: false,
  };  //initialising the variables or the interface with test data
}
