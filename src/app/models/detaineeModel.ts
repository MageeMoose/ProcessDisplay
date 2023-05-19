export class DetaineeModel {
  _id: string;
  _rev: string;
  roomNumber: string;
  backgroundColor: string;
  department: string;
  language: string;
  travel: string;
  section: string;
  identification: string;
  notes: string;
  text: string
  isSecMes: boolean;
  isVacant: boolean;
  hasVisitor: boolean;

  constructor() {
    this._id = '';
    this._rev = '';
    this.roomNumber= '';
    this.backgroundColor = '';
    this.department = '';
    this.language = '';
    this.travel = '';
    this.section = '';
    this.identification = '';
    this.notes = '';
    this.text = '';
    this.isSecMes = false;
    this.isVacant = false;
    this.hasVisitor = false;
  }
}


