import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { NavscrollDirective } from '../navscroll.directive';
import { ApiService } from '../api.service';
import { CookieService } from 'ngx-cookie-service';
import { ToolService } from '../tool.service';


@Component({
  selector: 'app-navbar',
  imports: [RouterModule,NavscrollDirective],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  constructor(public Api:ApiService,public Cookie:CookieService,public router:Router,public tools:ToolService){}

  ngOnInit(): void {  
    this.GetProfile();
    this.Online();
  }

  public userData:any;
  public IsLogged!:boolean;

  GetProfile(){
     this.Api.GetAuth().subscribe({
    next: (data) => this.userData = data,
    error: (err) => console.log(err)
  })
}

Online(){
  this.tools.isLoggedIn$.subscribe((status) => {
    this.IsLogged = status;
  })
};
  logout() {
      this.Api.cookie.delete('User');
      this.tools.setLoginStatus(false);
      this.router.navigate(["/"]);
    };

 isMenuOpen = false;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  }

