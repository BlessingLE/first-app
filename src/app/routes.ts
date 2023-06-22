import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';

const routeConfig: Routes = [
    {
      path: '',
      component: HomeComponent,
      title: 'Home page'
    },
    {
      path: 'details/:id',
      component: DetailsComponent,
      title: 'Home details'
    }
  ];
  /* the above variable array defines variable routeConfig of type Routes which is called in the main.ts file
    2 routes are defined. The home page route and the home details route.
    remember a route is a path navigation from 1 page to another in a web application
    */
  export default routeConfig;