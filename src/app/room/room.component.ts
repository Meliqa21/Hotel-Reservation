import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { RouterModule } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { max } from 'rxjs';

@Component({
  selector: 'app-room',
  imports: [RouterModule,ReactiveFormsModule],
  templateUrl: './room.component.html',
  styleUrl: './room.component.css'
})
export class RoomComponent implements OnInit {
constructor(public Api:ApiService){}

ngOnInit(): void {
  this.GetAllRoom();
}



public AllRoom:any[] = [];

public formInfo: FormGroup = new FormGroup({
  roomTypeId: new FormControl(""),
  priceFrom: new FormControl(),
  priceTo: new FormControl(),
  maximumGuests: new FormControl(0),
  checkIn: new FormControl(),
  checkOut: new FormControl(),
});

GetAllRoom(){
  this.Api.GetAllRoom().subscribe((data:any) => {
    this.AllRoom = data;
  })
}


applyFilter() {
  this.Api.Filtered(this.formInfo.value).subscribe((data: any) => {
  this.AllRoom = data;
  });
}
}