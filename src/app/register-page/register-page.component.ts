import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

interface IData {
  id ?: number,
  username?: string,
  userName?: string,
  url?: string,
  job?: string,
  gender?: string,
  index?: number,
  email: string,
  password: string,
  firstName:string,
  lastName:string
}

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent {
  url:string = 'https://www.w3schools.com/howto/img_avatar.png'

  hide:boolean = true;

  firstNameValue: string = ''
  firstValueError: string = ''

  lastNameValue: string = ''
  lastValueError: string = ''

  emailValue: string = ''
  emailError: string = ''

  passwordValue: string = ''
  passwordError: string = ''

  constructor(private routeRef: Router, private routeRef1: ActivatedRoute) { }

  ngOnInit() {
    localStorage.setItem("RoutingStatus", JSON.stringify(false))
  }


  submitted():void {
    if (this.firstNameValue.trim() === '') { this.firstValueError = 'Please Enter First Name..!' }
    else if (this.lastNameValue.trim() === '') { this.firstValueError = ''; this.lastValueError = "Please Enter Last Name..!" }
    else if (this.emailValue.trim() === '' ) { this.firstValueError = ''; this.lastValueError = ''; this.emailError = "Please Enter Email ID..!" }
    else if (!this.emailValue.trim().match('[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}')) { this.firstValueError = ''; this.lastValueError = ''; this.emailError = "Please Enter Valid Email ID..!" }
    else if (this.passwordValue.trim() === '') { this.firstValueError = ''; this.lastValueError = ''; this.emailError = ''; this.passwordError = 'Please Enter Password..!' }
    else if (!this.passwordValue.trim().match(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/)) { this.firstValueError = ''; this.lastValueError = ''; this.emailError = ''; this.passwordError = 'Please Enter Valid Password..!' }

    else {
      this.firstValueError = ''; this.lastValueError = ''; this.emailError = ''; this.passwordError = ""

      const oldLoginInfo:IData[] = JSON.parse(localStorage.getItem('loginDatas') || '[]');

      if (oldLoginInfo.constructor === Array) {
        const array:IData= ({
          id: oldLoginInfo.length + 1,
          firstName: this.firstNameValue.trim(),
          lastName: this.lastNameValue.trim(),
          username: this.firstNameValue.trim() + this.lastNameValue.trim(),
          email: this.emailValue.trim(),
          password: this.passwordValue.trim()
        })
        oldLoginInfo.push(array)
        localStorage.setItem("loginDatas", JSON.stringify(oldLoginInfo))
        localStorage.setItem("RoutingStatus", JSON.stringify(true))
        this.routeRef.navigate(['login'])
      }

      else {
        const oldLoginInfo: IData[] = []

        const array:IData = ({
          id: oldLoginInfo.length + 1,
          firstName: this.firstNameValue.trim(),
          lastName: this.lastNameValue.trim(),
          username: this.firstNameValue.trim() + this.lastNameValue.trim(),
          email: this.emailValue.trim(),
          password: this.passwordValue.trim()
        })
        oldLoginInfo.push(array)
        localStorage.setItem("loginDatas", JSON.stringify(oldLoginInfo))
        localStorage.setItem("RoutingStatus", JSON.stringify(true))
        this.routeRef.navigate(['login'])
      }
    }
  }
  routingFunction():void {
    localStorage.setItem("RoutingStatus", JSON.stringify(true))
    this.routeRef.navigate(['login'])
  }

}
