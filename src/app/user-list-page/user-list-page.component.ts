import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { DeleteDialogBoxComponent } from '../delete-dialog-box/delete-dialog-box.component';

interface IData {
  userName: string,
  url: string,
  job: string,
  gender: string,
  id: number,
  index: number
}

@Component({
  selector: 'app-user-list-page',
  templateUrl: './user-list-page.component.html',
  styleUrls: ['./user-list-page.component.scss']
})
export class UserListPageComponent {
  data: any
  constructor(private routeRef: Router, private routeRef1: ActivatedRoute, public dialog: MatDialog) { }

  ngOnInit() {
    localStorage.setItem("RoutingStatus", JSON.stringify(false))
  }

  ngDoCheck() {
    const oldInfo: IData = JSON.parse(localStorage.getItem('data') || '[]');
    this.data = oldInfo
  }

  back(): void {
    localStorage.setItem("RoutingStatus", JSON.stringify(true))
    this.routeRef.navigate(['homePage'])
  }

  deletedDate(id: number, index: number): void {
    const dialogRef1 = this.dialog.open(DeleteDialogBoxComponent, {
      disableClose: true,
    });

    dialogRef1.afterClosed().subscribe(result => {
      dialogRef1.close()
      if (result) {
        const oldInfo = JSON.parse(localStorage.getItem('data') || '[]');
        oldInfo.splice(index, 1);
        localStorage.setItem("data", JSON.stringify(oldInfo))
      }
    })
  }

  addUser(): void {
    localStorage.setItem("RoutingStatus", JSON.stringify(true))
    this.routeRef.navigate(['editAndAdd'])
  }

  editedData(userName: string, url: string, job: string, gender: string, id: number, index: number): void {
    const editDate: IData = {
      userName: userName,
      url: url,
      job: job,
      gender: gender,
      id: id,
      index: index
    }
    localStorage.setItem("RoutingStatus", JSON.stringify(true))
    this.routeRef.navigate(['editAndAdd', { 'editing': JSON.stringify(editDate) }])
  }

  detailSubmit(userName: string, url: string, job: string, gender: string, id: number, index: number): void {
    const editDate: IData = {
      userName: userName,
      url: url,
      job: job,
      gender: gender,
      id: id,
      index: index
    }
    localStorage.setItem("RoutingStatus", JSON.stringify(true))
    this.routeRef.navigate(['userDetail', { 'show': JSON.stringify(editDate) }])
  }

  quit(): void {
    localStorage.setItem("loginStatus", JSON.stringify(false))
    localStorage.setItem("RoutingStatus", JSON.stringify(true))
    this.routeRef.navigate(['login'])
  }
}
