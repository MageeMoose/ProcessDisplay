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
          _id: doc._id,
          _rev: doc._rev,
          roomNumber: doc.roomNumber,
          backgroundColor: doc.backgroundColor,
          department: doc.department,
          country: doc.country,
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
    
    if (!detainee || !detainee._id) {
      throw new Error('Detainee data is undefined or missing _id');
  }

    console.log("Detainee ID", detainee._id);
    try{

      const allRooms = await this.db.allDocs({include_docs: true, attachments: true});
      const foundRoom = allRooms.rows.find((row) => row.doc && (row.doc as any)._id === detainee._id);
      console.log("Room from DB", foundRoom?.doc);
      if(!foundRoom){
        console.error("Could not find room with id", detainee._id);
        return;
      }
      const room: any = foundRoom.doc;
      // const room = await this.db.get(detainee._id) as unknown as DetaineeModel;
      console.log("Detainee From Dialog", detainee);
      
      console.log("Rev before the update", detainee._rev);
      room._rev = detainee._rev;
      room.department = detainee.department;
      room.country = detainee.country;
      room.travel = detainee.travel;
      room.identification = detainee.identification;
      room.notes = detainee.notes;
      room.text = detainee.text;
      room.isSecMes = detainee.isSecMes;
      room.sceMesMassage = detainee.sceMesMassage;
      room.isVacant = false;

      const result = await this.db.put(room);
      console.log("Updated room", room)
      console.log("Rev after the update", detainee._rev);
      return result;
    }catch(error){
      console.error("Error updating room", error);
      throw error;
    }
  }

  async deleteDetainee(detainee: DetaineeModel): Promise<any>{
    return await this.db.remove(detainee);
  }

}
