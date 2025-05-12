import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-hotelinfo',
  imports: [RouterModule],
  templateUrl: './hotelinfo.component.html',
  styleUrl: './hotelinfo.component.css'
})
export class HotelinfoComponent {
  constructor(public actR:ActivatedRoute,public Api:ApiService){
    this.getHotelData()
  }
  public hotelRoomsName!: string;
  public hotelRooms: any;

  getHotelData() {
    this.actR.params.subscribe( (data:any) => {
      console.log(data);
      this.hotelRoomsName = data.name
      this.Api.GetHotelId(data.id).subscribe( (data:any) => {
        this.hotelRooms = data.rooms
      } )
    } )
  }

}
