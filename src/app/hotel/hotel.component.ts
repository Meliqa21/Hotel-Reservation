import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-hotel',
  imports: [RouterModule],
  templateUrl: './hotel.component.html',
  styleUrl: './hotel.component.css'
})
export class HotelComponent {
  constructor(public api:ApiService){
    this.showAllHotels()
  }
public hotels: any;

  showAllHotels() {
    this.api.GetAllHotels().subscribe( {
      next: (data:any) => {
        this.hotels = data
      },
      error: () => {}
    } )
  }
}
