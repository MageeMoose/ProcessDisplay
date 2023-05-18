import { Component, OnInit } from '@angular/core';
import { PounchdbService } from 'src/app/services/pounchdb.service';
import { DetaineeModel } from 'src/app/models/detaineeModel';

@Component({
  selector: 'app-roomlist-section-one',
  templateUrl: './roomlist-section-one.component.html',
  styleUrls: ['./roomlist-section-one.component.css']
})

export class RoomlistSectionOneComponent implements OnInit {
  rooms: DetaineeModel[] = [];
  distplayRoomInfo: string[] = ["roomNumber", "department", "language", "travel", "identification", "notes", "text"]; 
     
  constructor(
    private pounchdbService: PounchdbService
  ){}
  
  ngOnInit(): void {
      this.fetchtRooomInfo();
  }

  async fetchtRooomInfo(){
    try{
      this.rooms = await this.pounchdbService.getDetainees("section-one");
      console.log("Fetched list for Section One",this.rooms);
    }
    catch(err){
      console.log(err);

    }
    
  }
}
