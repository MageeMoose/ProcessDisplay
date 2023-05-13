export class DetaineeModel {
  id: string;
  _rev: string;
  roomNumber: string;
  backgroundColor: string;
  department: string;
  travel: string;
  section: string;
  identification: string;
  notes: string;
  text: string
  isSecMes: boolean;

  constructor() {
    this.id = '';
    this._rev = '';
    this.roomNumber= '';
    this.backgroundColor = '';
    this.department = '';
    this.travel = '';
    this.section = '';
    this.identification = '';
    this.notes = '';
    this.text = '';
    this.isSecMes = false;
  }
}


