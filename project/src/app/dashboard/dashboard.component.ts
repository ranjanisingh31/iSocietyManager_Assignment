import { Component, OnInit } from '@angular/core';
import { FormBuilder } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { EditAddDialogComponent } from '../edit-add-dialog/edit-add-dialog.component';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private fb: FormBuilder, private dialog: MatDialog) { }
  public data = [{
    link: "/assets/image/unit.png", title: "Unit Mapped", cal: "70/100"
  },
  {
    link: "/assets/image/list.png", title: "Active Charges", cal: "3/5"
  },
  {
    link: "/assets/image/read.png", title: "Reading Available", cal: "200/220"
  },
  {
    link: "/assets/image/format.png", title: "Format", cal: "Bill-Email-SMS"
  }];
  public progress = 23;
  public check = true;
  public checkBill = false;
  formValue = this.fb.group(
    {
      billing: ['Dec manual/Electricity'],
      cluster: ['Dec manual/Electricity'],
      tower: [''],
      unit: ['00D203'],
      remarks: ['']
    }
  );
  removeCluster = false;
  removeTower = false;
  removeUnit = false;
  add() {
    this.removeCluster = false;
    this.removeTower = false;
    this.removeUnit = false;

  }

  edit() {
    const dialogRef = this.dialog.open(EditAddDialogComponent, {
      width: "300px",
      height: "180px",
      data: {
        cluster: this.removeCluster,
        tower: this.removeTower,
        unit: this.removeUnit
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.removeCluster = result.result['cluster'];
      this.removeTower = result.result['tower'];
      this.removeUnit = result.result['unit'];


    });
  }
  bill() {
    this.checkBill = !this.checkBill;
    if (this.checkBill === true) {
      this.removeCluster = true;
      this.removeTower = true;
      this.removeUnit = true;
    } else {
      this.removeCluster = false;
      this.removeTower = false;
      this.removeUnit = false;
    }
  }
  public currentDate = new Date();


  public dueDate;
  ngOnInit(): void {
    this.dueDate = new Date();
    this.dueDate.setDate(this.dueDate.getDate() + 20);
  }

}
