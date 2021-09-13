import { Component } from '@angular/core';
import {
  Router,
  // import as RouterEvent to avoid confusion with the DOM Event
  Event as RouterEvent,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError
} from '@angular/router'

export interface INavLink {
  id : number; 
  pathLink : string;
  label : string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'car-reg-app';

  selectedNavLink : INavLink;
  navLinks : Array<INavLink> = [
    { pathLink : 'addcar', label : 'Add Car', id: 1 },
    { pathLink : 'listcars', label : 'Car Registry', id: 2 }
  ];

  // Sets initial value to true to show loading spinner on first load
  loading = true
  
  constructor(private router : Router){
    this.router.events.subscribe((e : RouterEvent) => {
      this.navigationInterceptor(e);
    })
  }

  // Shows and hides the loading spinner during RouterEvent changes
  navigationInterceptor(event: RouterEvent): void {
    if (event instanceof NavigationStart) {
      this.loading = true
    }
    if (event instanceof NavigationEnd) {
      this.loading = false
    }

    // Set loading state to false in both of the below events to hide the spinner in case a request fails
    if (event instanceof NavigationCancel) {
      this.loading = false
    }
    if (event instanceof NavigationError) {
      this.loading = false
    }
  }
  
  routeToLink = (event : any) => {
    //const element = event.currentTarget as HTMLInputElement;
    //const value = event.value;
    console.log(event);
    this.router.navigate([event.value.pathLink]);

  }
}
