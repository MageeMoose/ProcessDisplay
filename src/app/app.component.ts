import { Component, OnInit } from '@angular/core';
import PouchDB from 'pouchdb';
import { DetaineeModel } from './models/detaineeModel';
import { roomList } from './services/roomList';
import {v4 as uuidv4} from 'uuid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProcessDisplay';

  private db;

  constructor() {
    this.db = new PouchDB('detainee-rooms');
   }

   ngOnInit(): void {
    this.db = new PouchDB('detainee-rooms');

    this.db.allDocs({include_docs: true, attachments: true}).then(result => {
      if(result.rows.length === 0){
        roomList.forEach(room => {
          const detainee = new DetaineeModel();
          detainee._id = uuidv4();
          detainee.section = room.section;
          detainee.roomNumber = room.roomNumber;
          detainee.backgroundColor = room.backgroundColor; 
          this.db.get(detainee._id).then((doc) => {
            detainee._rev = doc._rev;
            return this.db.put(detainee);
        }).catch((err) => {
            if (err.name === 'not_found') {
              return this.db.put(detainee);
            } else {
              throw err;
            }
          });
        });
      }
  });
  }
}
