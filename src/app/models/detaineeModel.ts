export class DetaineeModel {
  id: string;
  _rev: string;
  roomNumber: string;
  department: string;
  travel: string;
  identification: string;
  notes: string;
  text: string;
  isSecMes: boolean;




  constructor() {
    this.id = '';
    this._rev = '';
    this.roomNumber= '';
    this.department = '';
    this.travel = '';
    this.identification = '';
    this.notes = '';
    this.text = '';
    this.isSecMes = false;
  }
}


