import { Injectable } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class WindowService {

  constructor(private router: Router) { }

  navigateTo(window: string) {
    this.router.navigate([window]);
  }

  navigateToWithParams(window: string, params: any) {
    const extras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(params)
      }
    };
    this.router.navigate(['/view-gallery'], extras);
  }
}
