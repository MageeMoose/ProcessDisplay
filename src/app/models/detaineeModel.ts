export class DetaineeModel {
  _id: string;
  _rev: string;
  roomNumber: string;
  backgroundColor: string;
  department: string;
  country: string;
  travel: string;
  section: string;
  identification: string;
  notes: string[];
  text: string
  isSecMes: boolean;
  sceMesMassage: string;
  isVacant: boolean;
  hasVisitor: boolean;

  constructor() {
    this._id = '';
    this._rev = '';
    this.roomNumber= '';
    this.backgroundColor = '';
    this.department = '';
    this.country = '';
    this.travel = '';
    this.section = '';
    this.identification = '';
    this.notes = [];
    this.text = '';
    this.isSecMes = false;
    this.sceMesMassage = '';
    this.isVacant = true;
    this.hasVisitor = false;
  }
}


