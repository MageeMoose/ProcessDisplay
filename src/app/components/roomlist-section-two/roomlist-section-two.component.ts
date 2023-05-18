import { Component } from '@angular/core';
import { DetaineeModel } from 'src/app/models/detaineeModel';
import { PounchdbService } from 'src/app/services/pounchdb.service';

@Component({
  selector: 'app-roomlist-section-two',
  templateUrl: './roomlist-section-two.component.html',
  styleUrls: ['./roomlist-section-two.component.css']
})
export class RoomlistSectionTwoComponent {
  rooms: DetaineeModel[] = [];
  distplayRoomInfo: string[] = ["roomNumber", "department", "travel", "identification", "notes", "text"]; 
     
  constructor(
    private pounchdbService: PounchdbService
  ){}
  
  ngOnInit(): void {
      this.fetchtRooomInfo();
  }

  async fetchtRooomInfo(){
    try{
      this.rooms = await this.pounchdbService.getDetainees("section-two");
      console.log("Fetched list for Section One",this.rooms);
    }
    catch(err){
      console.log(err);
    }
  }
}
