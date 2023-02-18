import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { AdminWorkComponent } from './admin-work/admin-work.component';
import { UserComponent } from './user/user.component';

import { PipeTaskComponent } from './pipe-task/pipe-task.component';
import { RouterModule, Routes } from '@angular/router';
import { HotelDetailComponent } from './hotel-detail/hotel-detail.component';
import { InfoPipe } from './info-pipe';
import { HotelrooomsComponent } from './hotelroooms/hotelroooms.component';
import { BookingdetailsComponent } from './bookingdetails/bookingdetails.component';
import { PaymenthistoryComponent } from './paymenthistory/paymenthistory.component';
import { TdfhotelPageComponent } from './tdfhotel-page/tdfhotel-page.component';
import { HeaderComponent } from './header/header.component';
const allLinks:Routes = [
  {path:'launchhotel',component:AdminWorkComponent},
  {path:'hotels',component:UserComponent},
  {path:'rooms',component:HotelrooomsComponent},
  {path:'bookingdetails',component:BookingdetailsComponent},
  {path:'hotelDetail/:hid',component:HotelDetailComponent},
  {path:'paymenthistory',component:PaymenthistoryComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    AdminWorkComponent,
    UserComponent,
    PipeTaskComponent,
    HotelDetailComponent,
    InfoPipe,
    HotelrooomsComponent,
    BookingdetailsComponent,
    PaymenthistoryComponent,
    TdfhotelPageComponent,
    HeaderComponent
   


  ],
  imports: [
    BrowserModule,
RouterModule.forRoot(allLinks),FormsModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
