import { Component, OnInit } from '@angular/core';
import { LoaderService } from './service/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ssrang';
  isLoading: Boolean;

  constructor(private loaderService: LoaderService) { }

  ngOnInit() {
    this.loaderService.isLoading.subscribe(async data => {
      this.isLoading = await data;
    });
  }
}
