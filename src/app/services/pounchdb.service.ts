import { Injectable } from '@angular/core';
import PouchDB from 'pouchdb';
import { DetaineeModel } from '../models/detaineeModel';


@Injectable({
  providedIn: 'root'
})
export class PounchdbService {
  private db;

  constructor() {
    this.db = new PouchDB('detainee-rooms');
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
          _id: doc.id,
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
