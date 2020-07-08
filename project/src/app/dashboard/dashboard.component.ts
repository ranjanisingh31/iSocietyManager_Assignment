import { Component, OnInit } from '@angular/core';
import { FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
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
  ngOnInit(): void {
  }

}
