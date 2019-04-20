import { Component, OnInit } from '@angular/core';
import { DataService } from "../service/data.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  items: any = "Getting data from server";
  itemNumber: number = 10;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getHomeData(this.itemNumber).subscribe(
      data => this.items = data,
      err => this.items = err.message
    );
  }

}
