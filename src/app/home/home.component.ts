import { Component, OnInit } from '@angular/core';
import { DataService } from "../service/data.service";
import { UserService } from '../service/user.service';
import { LoaderService } from '../service/loader.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  items: any = "Getting data from server";
  itemNumber: number = 10;

  users: Array<any> = [];
  constructor(private userService: UserService, private dataService: DataService, public loaderService: LoaderService) { }

  ngOnInit() {
    this.getHomeData();
    this.getCompanyAdminData();
  }

  getCompanyAdminData(){
    this.userService.getCompanyAdminData()
      .subscribe((data: Array<any>) => {
        this.users = data;
      }, err => {
        console.log(`Error: ${err}`);
      });
  }
  
  getHomeData(){
    this.dataService.getHomeData(this.itemNumber).subscribe(
      data => this.items = data,
      err => this.items = err.message
    );
  }
}
