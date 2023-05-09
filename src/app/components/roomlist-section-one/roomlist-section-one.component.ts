import { Component, OnInit } from '@angular/core';
import { JsonroomService } from 'src/app/services/jsonroom.service';
import { RoomListColor } from 'src/app/models/room-list-color';

@Component({
  selector: 'app-roomlist-section-one',
  templateUrl: './roomlist-section-one.component.html',
  styleUrls: ['./roomlist-section-one.component.css']
})

export class RoomlistSectionOneComponent implements OnInit {
  rooms: RoomListColor[] = [];

  constructor(private jsonService: JsonroomService){}
  
  ngOnInit(): void {
      this.jsonService.getRoomForSectionOne().subscribe(rooms =>{
        this.rooms = rooms
      })
  }

}
