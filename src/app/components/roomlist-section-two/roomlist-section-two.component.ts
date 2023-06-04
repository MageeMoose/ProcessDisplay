import { Component, OnInit } from '@angular/core';
import { PounchdbService } from 'src/app/services/pounchdb.service';
import { DetaineeModel } from 'src/app/models/detaineeModel';
import { AddDetaineeDialogComponent } from '../add-detainee-dialog/add-detainee-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { departmentList, travelList, identificationList, specMes } from '../add-detainee-dialog/selection-list';
@Component({
  selector: 'app-roomlist-section-two',
  templateUrl: './roomlist-section-two.component.html',
  styleUrls: ['./roomlist-section-two.component.css']
})
export class RoomlistSectionTwoComponent {
  rooms: DetaineeModel[] = [];
  distplayRoomInfo: string[] = ["roomNumber", "department", "language", "travel", "identification", "text"]; 
  departmentList = departmentList;
  travelList = travelList;
  identificationList = identificationList;
  specMes = specMes;   
  constructor(
    private pounchdbService: PounchdbService,
    public dialog: MatDialog,
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

  getColorConfigTravelList(value: string){
    const colorConfig = this.travelList.find((item) => item.listName === value);
    // console.log("Colorconfig", colorConfig);
    // console.log("Colorconfig Value", value);
    return colorConfig ? colorConfig : {backgroundColor: 'ffffff', fontColor: '#000000'};
  }

  getColorConfigIdentificationList(value: string){
    const colorConfig = this.identificationList.find((item) => item.listName === value);
    // console.log("Colorconfig", colorConfig);
    // console.log("Colorconfig Value", value);
    return colorConfig ? colorConfig : {backgroundColor: 'ffffff', fontColor: '#000000'};
  }

  openDetaineeInfoDialog(room: DetaineeModel): void{
    if (!room._id) {
      console.error('The DetaineeModel object has no _id');
      return;
    }
    const dialogRef = this.dialog.open(AddDetaineeDialogComponent, {
      width: '800px',
      data: room
    });

    dialogRef.afterClosed().subscribe((updatedRoom: DetaineeModel) => {
      console.log('The dialog was closed');
      this.pounchdbService.updateDetainee(updatedRoom);
    });

  }
}
