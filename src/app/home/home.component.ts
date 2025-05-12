import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  constructor(public Api:ApiService){}

  ngOnInit(): void {
    this.FavouriteRooms();
  }


  public room:any;
  FavouriteRooms(){
    this.Api.GetAllRoom().subscribe((data:any) => {
      this.room = data.splice(6,3)
      
    })
      
  }

}
