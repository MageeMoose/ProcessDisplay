import { Component, OnInit } from '@angular/core';
import { PounchdbService } from 'src/app/services/pounchdb.service';
import { DetaineeModel } from 'src/app/models/detaineeModel';
import { AddDetaineeDialogComponent } from '../add-detainee-dialog/add-detainee-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-roomlist-section-one',
  templateUrl: './roomlist-section-one.component.html',
  styleUrls: ['./roomlist-section-one.component.css']
})

export class RoomlistSectionOneComponent implements OnInit {
  rooms: DetaineeModel[] = [];
  distplayRoomInfo: string[] = ["roomNumber", "department", "language", "travel", "identification", "notes", "text"]; 
 
  
  constructor(
    private pounchdbService: PounchdbService,
    public dialog: MatDialog,
    private pouchdbService: PounchdbService
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

  openDetaineeInfoDialog(room: DetaineeModel): void{
    const dialogRef = this.dialog.open(AddDetaineeDialogComponent, {
      width: '800px',
      data: room
    });

    dialogRef.afterClosed().subscribe((updatedRoom: DetaineeModel) => {
      console.log('The dialog was closed');
      this.pouchdbService.updateDetainee(updatedRoom);
    });

  }
}
