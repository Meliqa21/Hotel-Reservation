import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { CookieService } from 'ngx-cookie-service';
import { ToolService } from '../tool.service';
import { RegisterComponent } from "../register/register.component";

@Component({
  selector: 'app-booked-rooms',
  imports: [RegisterComponent],
  templateUrl: './booked-rooms.component.html',
  styleUrl: './booked-rooms.component.css'
})
export class BookedRoomsComponent {
constructor(public Api:ApiService,public cookie:CookieService,public tools:ToolService){
  this.GetBooking();
  this.GetProfile();
  this.Online();

  
}


public date = new Date().toISOString().split("T")[0];
list:any = [];
public userData:any = null;
public IsLogged = false;

GetBooking(){
  this.Api.GetBooking().subscribe((data:any) => {
    this.list = data
    console.log(this.list);
    
    
  })
}


DeleteBooking(id:number){
  this.Api.DeleteBooking(id).subscribe(() =>{
    alert("Deleted")
this.GetBooking()  
})
}

GetProfile(){
  this.Api.GetAuth().subscribe({
    next: (data) => this.userData=data,
    error: (err) => console.log(err)
  })
}

Online(){
  this.tools.isLoggedIn$.subscribe((data) => {
    this.IsLogged = data;
    if(status){
      this.GetProfile();
    }
  })
};
}