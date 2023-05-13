import { Injectable, OnInit } from '@angular/core';
import PouchDB from 'pouchdb';
import { DetaineeModel } from '../models/detaineeModel';
import { roomList } from './roomList';

@Injectable({
  providedIn: 'root'
})
export class PounchdbService {
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
          detainee.roomNumber = room.roomNumber;
          detainee.backgroundColor = room.backgroundColor; 
          this.db.post(detainee);
        })
      }
    })
  }

  async getDetainees(section: string): Promise<any>{
    const result = await this.db.allDocs({include_docs: true, attachments: true});
    const detainee: DetaineeModel[] = result.rows
      .filter(
      (row) => 
      row.doc !== undefined && 
      (row.doc as any).section === section).map((row) =>{
        const doc = row.doc as PouchDB.Core.ExistingDocument<any>;
        const detaineeItem: DetaineeModel={
          id: doc._id,
          _rev: doc._rev,
          roomNumber: doc.roomNumber,
          backgroundColor: doc.backgroundColor,
          department: doc.department,
          travel: doc.travel,
          section: doc.section,
          identification: doc.identification,
          notes: doc.notes,
          text: doc.text,
          isSecMes: doc.isSecMes
        };
        return detaineeItem;
      });
    return detainee; 
  }
}
