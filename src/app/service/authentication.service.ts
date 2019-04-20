import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

import { LOCAL_STORAGE } from './localStorageProvider';

const CurrentUserKey: string = 'currentUser';

interface User {
  [x: string]: any 
}

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    constructor(@Inject(LOCAL_STORAGE) private localStorage: Storage, @Inject(PLATFORM_ID) private platformId: Object, private http: HttpClient) {
        let currentUserSubject = null;
        if (isPlatformBrowser(this.platformId)) {
            currentUserSubject = JSON.parse(this.localStorage.getItem(CurrentUserKey))
        }
        this.currentUserSubject = new BehaviorSubject<User>(currentUserSubject);
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    login(username: string, password: string) {
        return this.http.post<any>(`/api/user/authenticate`, { username, password })
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    this.localStorage.setItem(CurrentUserKey, JSON.stringify(user));
                    this.currentUserSubject.next(user);
                }

                return user;
            }));
    }

    logout() {
        // remove user from local storage to log user out
        this.localStorage.removeItem(CurrentUserKey);
        this.currentUserSubject.next(null);
    }
}