import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component'; //importing the component created in the terminal to the apps layout
//Typescript file
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ HomeComponent, RouterModule],  //adding the new components to the array
  template: `
  <main>
    <a [routerLink]="['/']">
      <header class="brand-name">
        <img class="brand-logo" src="/assets/Logo.png" alt="logo" aria-hidden="true">
      </header>
    </a>
    <section class="content">
      <router-outlet></router-outlet>
    </section>
  </main>
`,
 //sets the header name to the brand name. Then displays the logo which is stored in the assets folder
 //also adds the router directive and adds the link back to the home page 
 styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'homes';
}

