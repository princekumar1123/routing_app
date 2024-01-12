import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, NavigationEnd, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ActiveGuard implements CanActivate {
  status: boolean = true
  previousUrl: string = ''
  logInStatus: boolean = false;

  constructor(private routeRef: Router, private routeRef1: ActivatedRoute) { }

  ngOnInit() {
    localStorage.setItem("RoutingStatus", JSON.stringify(this.status))
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const loginSOurce: boolean = JSON.parse(localStorage.getItem('loginStatus') || '[]');
    this.logInStatus = loginSOurce
    const oldLgoinInfo: boolean = JSON.parse(localStorage.getItem('RoutingStatus') || '[]');
    this.status = oldLgoinInfo
    if (this.status) {
      return true
    }
    else {
      if (this.logInStatus) {
        localStorage.setItem("RoutingStatus", JSON.stringify(true))
        this.routeRef.navigate(['homePage'])
      }
      else if (this.logInStatus == false) {
        this.routeRef.navigate([''])
      }
      return false
    }
  }
}
