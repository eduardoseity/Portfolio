import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    let appComponent = new AppComponent();
    appComponent.updateNavbar("home");
  }

}
