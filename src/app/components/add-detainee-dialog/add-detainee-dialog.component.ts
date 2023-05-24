import { Component, Inject} from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DetaineeModel } from 'src/app/models/detaineeModel';
import { PounchdbService } from 'src/app/services/pounchdb.service';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-add-detainee-dialog',
  templateUrl: './add-detainee-dialog.component.html',
  styleUrls: ['./add-detainee-dialog.component.css']
})
export class AddDetaineeDialogComponent {
  detaineeForm: FormGroup

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
     });
    }

  onNoClick(): void {
    this.pounchService.updateDetainee(this.data).then(() => {
      this.dialogRef.close(this.data);
    });
  }
}


