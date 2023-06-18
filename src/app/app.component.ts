import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component'; //importing the component created in the terminal to the apps layout
//Typescript file

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ HomeComponent,],  //adding the new components to the array
  template: `
  <main>
    <header class="brand-name">
      <img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true">  
    </header>
    <section class="content">
      <app-home></app-home>
    </section>
  </main>
`, //sets the header name to the brand name. Then displays the logo which is stored in the assets folder
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'homes';
}

