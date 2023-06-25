import { Injectable } from '@angular/core';
import { HousingLocation } from './housing-location/housing-location.component';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor() { }
  
  url = 'http://localhost:3000/locations'; //instead of using the housingLocationlist array, we just connect to the json server to access the data stored there

  //the functions below allow dependenncies to acces the services's data (listed above)
  //these functions will either return a specific housinglocation id or the entire list of housinglocaton's 
  async getAllHousingLocations(): Promise<HousingLocation[]> {
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }  //the code is asynchronous code makes a get request over http to the webserver.
    
  async getHousingLocationById(id: number): Promise<HousingLocation | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return await data.json() ?? {};
  }  //this makes a call to the webserver

    //this method is used to recives the form data inputted by the user 
    submitApplication(firstName: string, lastName: string, email: string) {
      console.log(`Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`);
    }  //console log give the user a platform to see the details of form provided
}


