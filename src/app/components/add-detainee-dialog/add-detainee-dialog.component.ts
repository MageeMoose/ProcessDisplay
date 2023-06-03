import { Component, Inject} from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DetaineeModel } from 'src/app/models/detaineeModel';
import { PounchdbService } from 'src/app/services/pounchdb.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { departmentList, travelList, identificationList, specMes } from './selection-list';

@Component({
  selector: 'app-add-detainee-dialog',
  templateUrl: './add-detainee-dialog.component.html',
  styleUrls: ['./add-detainee-dialog.component.css']
})
export class AddDetaineeDialogComponent {
  detaineeForm: FormGroup
  departmentList = departmentList;
  travelList = travelList;
  identificationList = identificationList;
  specMes = specMes;


  constructor(public dialogRef: MatDialogRef<AddDetaineeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DetaineeModel,
    private formBuilder: FormBuilder,
    private pounchService : PounchdbService) {
      this.detaineeForm = this.formBuilder.group({
        _id: [this.data._id],
        _rev: [this.data._rev],
        roomNumber: [this.data.roomNumber],
        backgroundColor: [this.data.backgroundColor],
        department: [this.data.department],
        language: [this.data.language],
        travel: [this.data.travel],
        section: [this.data.section],
        identification: [this.data.identification],
        notes: [this.data.notes],
        text: [this.data.text],
        isSecMes: [this.data.isSecMes],
        sceMesMassage: [this.data.sceMesMassage],
        isVacant: [this.data.isVacant],
        //hasVisitor: [this.data.model.hasVisitor]
        specMesBox: new FormArray([])
     });

     this.addCheckboxes();
    }

    private addCheckboxes() {
      this.specMes.forEach((item, i) => {
        const isChecked = this.data.notes.includes(item.listName);
        this.specMesBox.push(this.formBuilder.control(isChecked));
      });
    }

    get specMesBox() {
      return this.detaineeForm.get('specMesBox') as FormArray;
    }

  onNoClick(): void {
    const formValue = this.detaineeForm.value;

  const nostes :string[]= [];

  for(let i = 0; i < this.specMesBox.length; i++){
    if(this.specMesBox.at(i).value){
      nostes.push(this.specMes[i].listName);
    }
  }

  const updatedData: DetaineeModel = {
    ...formValue,
    notes: nostes,
    specMesBox: this.specMesBox.value
  };

  console.log(updatedData);
  this.pounchService.updateDetainee(updatedData).then(() => {
    this.dialogRef.close(updatedData);
  });
  }
}


