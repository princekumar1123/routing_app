import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

interface IData {
  id: number,
  username: string,
  userName?: string,
  url: string,
  job: string,
  gender: string,
  index?: number
}

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  totalCount: number = 0
  menCount: number = 0
  womenCount: number = 0

  ReactDeveloperCounts: number = 0
  TesterCounts: number = 0
  AngularDeveloperCounts: number = 0
  VueDeveloperCounts: number = 0
  BackEndDeveloperCounts: number = 0
  route_Status: boolean = true

  constructor(private routeRef: Router, private routeRef1: ActivatedRoute) { }

  ngOnInit() {
    localStorage.setItem("RoutingStatus", JSON.stringify(false))

    localStorage.setItem("loginStatus", JSON.stringify(true))

    const oldInfo = JSON.parse(localStorage.getItem('data') || '[]');

    this.totalCount = oldInfo.length

    const maleCount = oldInfo.filter((e: IData) => e.gender == 'male')

    this.menCount = maleCount.length

    const femaleCount = oldInfo.filter((e: IData) => e.gender == 'female')

    this.womenCount = femaleCount.length

    const ReactDeveloperCount = oldInfo.filter((e: IData) => e.job == 'React Developer')

    this.ReactDeveloperCounts = ReactDeveloperCount.length

    const TesterCount = oldInfo.filter((e: IData) => e.job == 'Tester')

    this.TesterCounts = TesterCount.length

    const AngularDeveloperCount = oldInfo.filter((e: IData) => e.job == 'Angular Developer')

    this.AngularDeveloperCounts = AngularDeveloperCount.length

    const VueDeveloperCount = oldInfo.filter((e: IData) => e.job == 'Vue Developer')

    this.VueDeveloperCounts = VueDeveloperCount.length

    const BackEndDeveloperCount = oldInfo.filter((e: IData) => e.job == 'Back End Developer')

    this.BackEndDeveloperCounts = BackEndDeveloperCount.length
  }


  routing(): void {
    localStorage.setItem("RoutingStatus", JSON.stringify(true))
    this.routeRef.navigate(['userList'])
  }

   quit(): void {
    localStorage.setItem("loginStatus", JSON.stringify(false))
    localStorage.setItem("RoutingStatus", JSON.stringify(true))
    this.routeRef.navigate(['login'])
  }

}
