import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

interface IData {
  Name?: string,
  id: number,
  job: string,
  gender: string,
  profileUrl: string,
  userName?: string,
  url?: string
}

@Component({
  selector: 'app-user-details-page',
  templateUrl: './user-details-page.component.html',
  styleUrls: ['./user-details-page.component.scss']
})
export class UserDetailsPageComponent {

  showedValue: IData | undefined
  profileUrl = 'https://www.w3schools.com/howto/img_avatar.png'
  Name: string = ""
  id: number = 0
  job: string = ""
  gender: string = ""

  constructor(private routeRef: Router, private routeRef1: ActivatedRoute) {
    let shownValue = routeRef1.snapshot.paramMap.get('show')
    if (shownValue != undefined) {
      if (shownValue != null) {
        this.showedValue = JSON.parse(shownValue)
        if (this.showedValue != undefined) {
          this.Name = this.showedValue.userName as string
          this.id = this.showedValue.id
          this.job = this.showedValue.job
          this.gender = this.showedValue.gender
          this.profileUrl = this.showedValue.url as string
        }
      }
    }
  }

  back(): void {
    this.routeRef.navigate(['userList'])
  }
}