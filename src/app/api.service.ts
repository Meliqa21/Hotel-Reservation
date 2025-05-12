import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  [x: string]: any;

  constructor(public api : HttpClient,public cookie:CookieService) { }

  LoaderLogic : BehaviorSubject<boolean> = new BehaviorSubject(false);

GetAllRoom(){
   return this.api.get(`https://hotelbooking.stepprojects.ge/api/Rooms/GetAll`)
  }

GetAllRoomId(id:number){
  return this.api.get(`https://hotelbooking.stepprojects.ge/api/Rooms/GetRoom/${id}`)
}

GetAvailableRooms(){
  return this.api.get(`https://hotelbooking.stepprojects.ge/api/Rooms/GetAvailableRooms?from=04.05.2025&to=04.06.2025`)
}

GetRoomTypes(){
  return this.api.get('https://hotelbooking.stepprojects.ge/api/Rooms/GetRoomTypes')
}

Filtered(body:any){
  return this.api.post("https://hotelbooking.stepprojects.ge/api/Rooms/GetFiltered",body)
}

GetAllHotels(){
  return this.api.get("https://hotelbooking.stepprojects.ge/api/Hotels/GetAll")
}

GetHotelId(id:number){
  return this.api.get(`https://hotelbooking.stepprojects.ge/api/Hotels/GetHotel/${id}`)
}

GetBooking(){
  return this.api.get("https://hotelbooking.stepprojects.ge/api/Booking")
}

GetBookingPost(body:any){
  return this.api.post("https://hotelbooking.stepprojects.ge/api/Booking", body, {responseType: "text"})
}

DeleteBooking(id:number){
  return this.api.delete(`https://hotelbooking.stepprojects.ge/api/Booking/${id}`, {responseType: "text"})
}

signIn(body: any) {
  return this.api.post(`https://api.everrest.educata.dev/auth/sign_in`, body);
}

SignUp(Body:any){
  return this.api.post("https://api.everrest.educata.dev/auth/sign_up",Body)
}

signOut(body: any) {
  return this.api.post("https://api.everrest.educata.dev/auth//sign_out", body)
}

GetAuth(){
  return this.api.get("https://api.everrest.educata.dev/auth")
}

isLoggedIn(): boolean {
  return this.cookie.check("User")
}

startLoader (){
  this.LoaderLogic.next(true)
}

stopLoader() {
  this.LoaderLogic.next(false)
}

}
