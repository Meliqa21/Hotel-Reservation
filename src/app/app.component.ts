import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { HomeComponent } from "./home/home.component";
import { FooterComponent } from "./footer/footer.component";
import { ApiService } from './api.service';
import { LoaderComponent } from "./loader/loader.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, FooterComponent, LoaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Hotel Reservation';
  constructor(public Api:ApiService){
    this.Loader();
  }

  public loading : boolean = false
  
  Loader(){
    this.Api.LoaderLogic.subscribe( (data:boolean) => {
      this.loading = data
    })
  }
}
