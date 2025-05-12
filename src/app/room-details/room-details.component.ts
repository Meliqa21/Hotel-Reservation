import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ApiService } from '../api.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-room-details',
  imports: [RouterModule,ReactiveFormsModule],
  templateUrl: './room-details.component.html',
  styleUrl: './room-details.component.css'
})
export class RoomDetailsComponent {
constructor(public actR:ActivatedRoute,public Api:ApiService,){
  this.RoomDetails();
  this.FormInfo();
}

public roomId:any;
public room:any;
public currentImageIndex = 0;
public Postinfo!:FormGroup;
public minCheckIn: string = "";
public minCheckOut: string = "";

FormInfo() {
  const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD

  this.Postinfo = new FormGroup({
    CheckIn: new FormControl("", Validators.required),
    CheckOut: new FormControl("", Validators.required)
  });


  this.minCheckIn = today;
}

RoomDetails(){
  this.roomId = this.actR.snapshot.paramMap.get("id");
  this.Api.GetAllRoom().subscribe((data:any) => {
    this.room = data.find((item:any) => item.id == this.roomId)
  })
}

nextImage() {
  if (this.room?.images?.length) {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.room.images.length;
  }
}


goToImage(index: number) {
  this.currentImageIndex = index;
}

PostRoom() {
  this.Api.GetBookingPost({
  "id": 0,
  "roomID": this.roomId,
  "checkInDate": this.Postinfo.controls['CheckIn'].value,
  "checkOutDate": this.Postinfo.controls['CheckOut'].value,
  "totalPrice": 0,
  "isConfirmed": true,
  "customerName": "John",
  "customerId": "123",
  "customerPhone": "555-4422"
  }).subscribe({
    next:() => {
      alert('successfully booked')
    },
    error:() => {
      alert("couldnt book")
      console.log(console.error());
      }
  })

  this.Postinfo.get('CheckIn')?.valueChanges.subscribe((checkInValue: string) => {
    this.minCheckOut = checkInValue;
    const checkOutControl = this.Postinfo.get('CheckOut');
    if (checkOutControl?.value && checkOutControl.value <= checkInValue) {
      checkOutControl.setValue("");
    }
  });
}
}


