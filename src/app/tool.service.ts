import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToolService {

  constructor(public cookie:CookieService) { }

  private loginStatus = new BehaviorSubject<boolean>(false);
  public isLoggedIn$ = this.loginStatus.asObservable();
   setLoginStatus(status: boolean) {
    this.loginStatus.next(status);
  }

  isLoggedIn(): boolean {
    return this.cookie.check('User');
  }
}
