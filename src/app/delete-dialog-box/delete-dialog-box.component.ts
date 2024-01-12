import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-delete-dialog-box',
  templateUrl: './delete-dialog-box.component.html',
  styleUrls: ['./delete-dialog-box.component.scss']
})
export class DeleteDialogBoxComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: boolean, private dialogRef1: MatDialogRef<DeleteDialogBoxComponent>) { }
  deleteData(): void {
    this.dialogRef1.close(this.data = true)
  }

  cancel(): void {
    this.dialogRef1.close()
  }
}
