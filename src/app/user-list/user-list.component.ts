import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { UserService } from '../service/user.service';
import { Observable, Subscription } from 'rxjs';
import { LoaderService } from '../service/loader.service';

import { Sort, MatTable } from '@angular/material';

interface SortBy {
  column: string,
  direction: 'asc' | 'desc' | ''
}

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit, OnDestroy {
  @ViewChild(MatTable) table: MatTable<any>;
  displayedColumns: string[] = ['name', 'key', 'smsPhone', 'twoFactorEmail'];
  pageSizeOptions = [5, 10, 25, 100];
  users: Array<any> = [];
  paginatedUsers: Array<any> = [];
  loading: Observable<boolean>;
  userSearchSubscription: Subscription;

  request = {
    pageSize: this.pageSizeOptions[0],
    pageIndex: 0,
    sortValue: <SortBy>{ column: this.displayedColumns[0], direction: 'asc' }
  };

  constructor(private userService: UserService, public loaderService: LoaderService) { }

  ngOnInit() {
    this.userSearchSubscription = this.userService.getCompanyAdminData()
      .subscribe((data: Array<any>) => {
        this.users = data;
        this.users.sort(this.sortData());
        this.initUsers();
      }, err => {
        console.log(`Error: ${err}`);
      });
  }

  onPaginate(event: any) {
    console.log('paginating');
    this.request.pageSize = event.pageSize;
    this.request.pageIndex = event.pageIndex;
    this.initUsers();
  }

  sortUsers(sort: Sort) {
    if (sort.active) {
      this.request.sortValue = <SortBy>{ column: sort.active, direction: sort.direction };
    }
    this.paginatedUsers.sort(this.sortData());
    this.table.renderRows();
  }

  initUsers() {
    this.paginatedUsers = this.users.slice(
      this.request.pageIndex * this.request.pageSize,
      this.request.pageIndex * this.request.pageSize + this.request.pageSize);
    this.paginatedUsers.sort(this.sortData());
  }

  sortData() {
    return (userA: any, userB: any) => {
      if (this.request.sortValue) {
        const sortItem = this.request.sortValue;
        const valueA = userA[sortItem.column];
        const valueB = userB[sortItem.column];
        let value: number;
        if (typeof valueA === 'string') {
          value = valueA.localeCompare(valueB);
        } else {
          value = valueA === valueB ? 0 : valueA > valueB ? -1 : 1;
        }
        if (value === 0) {
          return value;
        }
        if (sortItem.direction === 'asc') {
          return value;
        } else {
          return -value;
        }
      }
      return 0;
    };
  }

  ngOnDestroy(): void {
    this.userSearchSubscription.unsubscribe();
  }
}
