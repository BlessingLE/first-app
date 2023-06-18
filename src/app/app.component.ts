import { Component } from '@angular/core';
//Typescript file

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  template: `<h1>Hello World!</h1>`, //changes the text displayed on page
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'homes';
}
