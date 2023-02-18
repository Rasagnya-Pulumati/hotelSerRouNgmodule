import { Component, OnInit } from '@angular/core';
import { Hotel } from '../hotel';
import { HotelOperationService } from '../hotel-operation.service';

@Component({
  selector: 'app-tdfhotel-page',
  templateUrl: './tdfhotel-page.component.html',
  styleUrls: ['./tdfhotel-page.component.css']
})
export class TdfhotelPageComponent{
  __hotelService:HotelOperationService;
   h:Hotel = new Hotel(1,"Taj",3,"Hyderabad","pooja","emeraldpark.jpg","Good",3,2000);
   


  constructor(hotelService:HotelOperationService)
   {
    this.__hotelService=hotelService;
    
    
    
  }
  
  submitForm(){
    //this.__hotelService.addHotel(this.h)
    console.log("form submit button clicked")
    console.log(this.h);
   }

}
