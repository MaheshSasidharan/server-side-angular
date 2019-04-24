import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  getCompanyAdminData(includeDisabled: number = 1) {
    return this.httpClient.get(`/api/company/id/users`, {
      params: {
        includeDisabled: `${includeDisabled}`
      }
    });
  }
}
