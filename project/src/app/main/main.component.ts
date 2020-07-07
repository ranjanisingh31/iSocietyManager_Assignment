import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }
  public tab = 1;
  home() {
    // this.router.navigate(['']);
  }
  ngOnInit(): void {
  }

}
