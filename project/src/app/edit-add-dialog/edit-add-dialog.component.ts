import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { DashboardComponent } from '../dashboard/dashboard.component';

@Component({
  selector: 'app-edit-add-dialog',
  templateUrl: './edit-add-dialog.component.html',
  styleUrls: ['./edit-add-dialog.component.css']
})
export class EditAddDialogComponent implements OnInit {
  constructor(private dialogRef: MatDialogRef<EditAddDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: DashboardComponent) { }
  closeDialog() {
    this.dialogRef.close();
  }
  public result;
  edit(cluster, tower, unit) {
    this.result = {
      "cluster": !cluster.checked, "tower": !tower.checked, "unit": !unit.checked
    }
    this.dialogRef.close({ result: this.result });
  }

  ngOnInit(): void {

  }

}
