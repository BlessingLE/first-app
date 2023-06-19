import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component'; 
//this is added the new housing component into the home component -nested components 

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
    <app-housing-location></app-housing-location>
  </section>
`, 
//The first section creates a search bar that filters by city and adds a button to search
//The second section adds the housing location to the home template
  
styleUrls: ['./home.component.css']
})
export class HomeComponent {

}
