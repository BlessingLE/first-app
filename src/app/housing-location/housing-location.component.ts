import { Component, Input } from '@angular/core';
/*input is a decorator that allows you to recieve input from the user, to use 
it for the values of the attributes in the interface datatypes*/
import { CommonModule } from '@angular/common';
import { Housinglocation } from '../housinglocation';

@Component({
  selector: 'app-housing-location', 
  standalone: true,
  imports: [CommonModule],
  template: `
    <p> 
      housing-location works!
    </p>
  `,
  styleUrls: ['./housing-location.component.css']
})

export class HousingLocationComponent {
    @Input() housinglocation!:
  HousingLocation;
} // '!' is called the non-null assertion operator which means the values passed cannot be null or undefined
/*In the above housinglocationcomponentclass, a new property called input of type housingloation is added. 
It calls the input() method which allows for the values of the interface to be changed. In order o alow for the input 
to be passed in the method, an '!' has to be included. The protperty name is housinglocation and it i prefixed with 
input()*/

export interface HousingLocation {
  id: number;
  name: string;
  city: string;
  state: string;
  photo: string;
  availableUnits: number;
  wifi: boolean;
  laundry: boolean;
}  //defining the variables of the interface for housing loctaion 
