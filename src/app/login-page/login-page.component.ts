import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

interface IData {
  id: number,
  username: string,
  userName?: string,
  url: string,
  job: string,
  gender: string,
  index?: number,
  email: string,
  password: string
}

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  url: string = 'https://www.w3schools.com/howto/img_avatar.png'
  hide: boolean = true;
  passwordValue: string = ""
  passwordError: string = ''
  emailValue: string = ''
  emailError: string = ''

  constructor(private routeRef: Router, private routeRef1: ActivatedRoute) { }

  ngOnInit() {
    localStorage.setItem("RoutingStatus", JSON.stringify(false))
  }

  submitted(): void {
    if (this.emailValue.trim() === '') { this.emailError = "Please Enter Email ID..!" }
    else if ( !this.emailValue.trim().match('[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}')) { this.emailError = "Please Enter Valid Email ID..!" }
    else if (this.passwordValue.trim() === '' ) { this.emailError = ''; this.passwordError = 'Please Enter Password..!' }
    else if ( !this.passwordValue.trim().match(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/)) { this.emailError = ''; this.passwordError = 'Please Enter Valid Password..!' }
    else {
      this.emailError = ''; this.passwordError = "";
      const oldLoginInfo = JSON.parse(localStorage.getItem('loginDatas') || '[]')

      if (oldLoginInfo.length != 0) {
        oldLoginInfo.filter((e: IData) => {
          if (e.email == this.emailValue.trim() && e.password == this.passwordValue.trim()) {
            localStorage.setItem("RoutingStatus", JSON.stringify(true))
            this.routeRef.navigate(['homePage'])
          }
          else {
            this.passwordError = "Please Enter the Valid Email ID and Password..!"
          }
        })
      }
      else {
        this.passwordError = "Please Register your Email ID and Password..!"
      }
    }
  }

  routingFunction(): void {
    localStorage.setItem("RoutingStatus", JSON.stringify(true))
    this.routeRef.navigate(['register'])
  }

}