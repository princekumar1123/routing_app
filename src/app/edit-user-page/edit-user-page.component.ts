import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

interface IData {
  id: number,
  username: string,
  userName?:string,
  url: string,
  job: string,
  gender: string,
  index?:number
}

@Component({
  selector: 'app-edit-user-page',
  templateUrl: './edit-user-page.component.html',
  styleUrls: ['./edit-user-page.component.scss']
})
export class EditUserPageComponent {

  editValue!: IData

  addStatus: boolean = true


  function: boolean = true;

  hide: boolean = true;

  nameValue: string = ''
  nameError: string = ''

  urlValue: string = ''
  urlError: string = ''

  genderValue: string = ''
  genderError: string = ''

  jobValue: string = ''
  jobError: string = ''

  constructor(private routeRef: Router, private routeRef1: ActivatedRoute) {
    let editedValue = routeRef1.snapshot.paramMap.get('editing')
    if (editedValue != undefined) {
      this.addStatus = false

      if (editedValue != null) {
        this.editValue = JSON.parse(editedValue)
          this.nameValue = this.editValue.userName as string
          this.urlValue = this.editValue.url
          this.jobValue = this.editValue.job
          this.genderValue = this.editValue.gender
      }
    }

  }

  ngOnInit() {
    localStorage.setItem("RoutingStatus", JSON.stringify(false))
  }

  


  submitted():void {


    if (this.nameValue.trim() === '') { this.nameError = 'Please Enter the Name..!' }

    else if (this.urlValue.trim() === '') { this.nameError = ''; this.urlError = "Please Enter the URL..!" }

    else if (this.urlValue.match(/\w+\.(jpg|jpeg|gif|png|tiff|bmp)$/gi) == null) { this.nameError = ''; this.urlError = "Please Enter the Valid URL..!" }

    else if (this.jobValue === '') { this.nameError = ''; this.urlError = ''; this.jobError = 'Please Select the Job..!' }

    else if (this.genderValue === '') { this.nameError = ''; this.urlError = ''; this.jobError = ''; this.genderError = "Please Select the Gender..!" }

    else {


      this.nameError = ''; this.urlError = ''; this.genderError = ''; this.jobError = ""


      const oldInfo: IData[] = JSON.parse(localStorage.getItem('data') || '[]');


      if (oldInfo != null) {

        const array: IData = ({
          id: oldInfo.length + 1,
          username: this.nameValue,
          url: this.urlValue,
          job: this.jobValue,
          gender: this.genderValue
        })
        oldInfo.push(array)


        localStorage.setItem("data", JSON.stringify(oldInfo))

        localStorage.setItem("RoutingStatus", JSON.stringify(true))

        this.routeRef.navigate(['userList'])

      }
      else {

        const oldInfo: IData[] = []
        const array = ({
          id: oldInfo.length + 1,
          username: this.nameValue,
          url: this.urlValue,
          job: this.jobValue,
          gender: this.genderValue
        })
        oldInfo.push(array)


        localStorage.setItem("data", JSON.stringify(oldInfo))

        localStorage.setItem("RoutingStatus", JSON.stringify(true))

        this.routeRef.navigate(['userList'])

      }


    }
  }


  updatedSubmit() :void{

    if (this.nameValue.trim() === '') { this.nameError = 'Please Enter the Name..!' }

    else if (this.urlValue.trim() === '') { this.nameError = ''; this.urlError = "Please Enter the URL..!" }

    else if (this.urlValue.match(/\w+\.(jpg|jpeg|gif|png|tiff|bmp)$/gi) == null) { this.nameError = ''; this.urlError = "Please Enter the Valid URL..!" }

    else if (this.jobValue === '') { this.nameError = ''; this.urlError = ''; this.jobError = 'Please Select the Job..!' }

    else if (this.genderValue === '') { this.nameError = ''; this.urlError = ''; this.jobError = ''; this.genderError = "Please Select the Gender..!" }

    else {
      this.nameError = ''; this.urlError = ''; this.genderError = ''; this.jobError = ""


      const oldInfo = JSON.parse(localStorage.getItem('data') || '[]');

 
      oldInfo.forEach((e: IData, i: number): void => {
        if (i == this.editValue.index) {

          oldInfo[i].username = this.nameValue
          oldInfo[i].url = this.urlValue
          oldInfo[i].job = this.jobValue
          oldInfo[i].gender = this.genderValue

        }
      })

      localStorage.setItem("data", JSON.stringify(oldInfo))
      localStorage.setItem("RoutingStatus", JSON.stringify(true))
      this.routeRef.navigate(['userList'])
    }

  }

  back():void {
    localStorage.setItem("RoutingStatus", JSON.stringify(true))
    this.routeRef.navigate(['userList'])

  }


}
