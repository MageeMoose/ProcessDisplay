import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { RoomListColor } from '../models/room-list-color';

@Injectable({
  providedIn: 'root'
})
export class JsonroomService {
  private roomPath = "./data/roomlistOne.json"

  constructor(private http: HttpClient) { }

  getRoomForSectionOne(): Observable<RoomListColor[]>{
    return this.http.get<RoomListColor[]>(this.roomPath)
  }
}
