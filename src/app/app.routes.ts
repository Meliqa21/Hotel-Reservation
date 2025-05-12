import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RoomDetailsComponent } from './room-details/room-details.component';
import { RoomComponent } from './room/room.component';
import { BookedRoomsComponent } from './booked-rooms/booked-rooms.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { RegisterComponent } from './register/register.component';
import { HotelComponent } from './hotel/hotel.component';
import { HotelinfoComponent } from './hotelinfo/hotelinfo.component';
import { ErrorComponent } from './error/error.component';

export const routes: Routes = [
    {path:"",component:HomeComponent},
    {path:"Rooms",component:RoomComponent},
    {path:"RoomDetails/:id",component:RoomDetailsComponent},
    {path:"Booking",component:BookedRoomsComponent},
    {path:"SignIn",component:SignInComponent},
    {path:"Register",component:RegisterComponent},
    {path:"Hotels",component:HotelComponent},
    {path:"Hotels/:name/:id",component:HotelinfoComponent},
    {path:"**",component:ErrorComponent}
];
