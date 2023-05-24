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
  
  async addDetainee(detainee: DetaineeModel): Promise<any>{
    await this.db.post(detainee);
  }
 
// Returns a list of all detainees in a given section
// section: the section to get detainees from
// returns: a list of detainees from the given section
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
          language: doc.language,
          travel: doc.travel,
          section: doc.section,
          identification: doc.identification,
          notes: doc.notes,
          text: doc.text,
          isSecMes: doc.isSecMes,
          sceMesMassage: doc.sceMesMassage,
          isVacant: doc.isVacant,
          hasVisitor: doc.hasVisitor
        };
        return detaineeItem;
      }).sort((a,b) => a.roomNumber > b.roomNumber ? 1 : -1);
    return detainee; 
  }

// This function returns a detainee document from the database
 async getDetaineeById(id: string): Promise<any>{
    return await this.db.get(id);
  }
  async createDetainee(detainee: DetaineeModel): Promise<any>{
    return await this.db.post(detainee);
  }
  async updateDetainee(detainee: DetaineeModel): Promise<any>{
    return await this.db.put(detainee);
  }
  async deleteDetainee(detainee: DetaineeModel): Promise<any>{
    return await this.db.remove(detainee);
  }

}
