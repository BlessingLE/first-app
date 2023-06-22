import { Component, inject } from '@angular/core'; //adding the 'inject' key imports the inject funtion and allows you to inject services into this component
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component'; 
//this is added the new housing component into the home component -nested components  
import { HousingLocation } from '../housing-location/housing-location.component'; //This creates an instance of the houselocation nsterface and allows homeComponent to use it
import { HousingService } from '../housing.service'; //we have to import the service and then inject it in order to use it
import { RouterModule} from '@angular/router';

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

  /*<section class="results">
  <app-housing-location
  *ngFor="let housingLocation of housingLocationList"
  [housinglocation]="housingLocation">
</app-housing-location>
  </section>
`, 
//The first section creates a search bar that filters by city and adds a button to search

//The second section adds the housing location to the home template
/*In the second part, [housingLocation]="housing" is called property binding. It is 
in the format [property attribute used to create an instance of the actual property] = "propery attribute containing the actual data values". "value" is thr name of the property in the specific component. 
property binding allows you to connet a variable to an input() in angular*/

/*Now we replaced the second part with <app-housing-location *ngFor= let housinglocation of housingLocationList" [housinglocation]="housingLocation"></app-housing-location>
This allows us to use the ngFor directive which performs thwe same functions as a for loop. Before we didnt need it because only had one housing location. But now we have multiple and will need to loop through 
all of them.*/

styleUrls: ['./home.component.css']
})

export class HomeComponent {
  housingLocationList: HousingLocation[] = [];
   //above is an array of multiple housing locations which we will display on the web page.
   //we can either explicitely display the list or add the entries into a service file and inject that file here.
  housingService: HousingService = inject(HousingService); //thiscreates a variable and assigns it to the value of the serviece HousingService
  constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocations();
  }  //the constructor is caled when the method runs. This stores all the locations in the service inside the housingLocationList array.
    //we can do this by calling the getAllHouseServiceLocations function defined in the service. This is basically inhecting the service into this property variable
}
