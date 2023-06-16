import { Component, OnInit } from '@angular/core';
import { DetaineeModel } from 'src/app/models/detaineeModel';
import { PounchdbService } from 'src/app/services/pounchdb.service';

@Component({
  selector: 'app-count-vacancy-section-one',
  templateUrl: './count-vacancy-section-one.component.html',
  styleUrls: ['./count-vacancy-section-one.component.css']
})
export class CountVacancySectionOneComponent implements OnInit {
  vacantCountSectionOne : number = 0;
  vacantCountSectionTwo : number = 0;
  vacantCountSectionTotal : number = 0;
  noVacantCountSectionOne : number = 0;
  noVacantCountSectionTwo : number = 0;
  noVacantCountSectionTotal : number = 0;


  constructor(private db: PounchdbService ) {}

  ngOnInit(){
    this.db.getDetainees('section-one')
      .then((detanees: DetaineeModel[]) => {
        this.vacantCountSectionOne = detanees.filter((d: DetaineeModel) => d.isVacant).length;
      })
    this.db.getDetainees('section-two')
      .then((detanees: DetaineeModel[]) => {
        this.vacantCountSectionTwo = detanees.filter((d: DetaineeModel) => d.isVacant).length;
      }) 
    this.db.getDetainees('section-one')
      .then((detanees: DetaineeModel[]) => {
        this.noVacantCountSectionOne = detanees.filter((d: DetaineeModel) => !d.isVacant).length;
      })
      this.db.getDetainees('section-two')
      .then((detanees: DetaineeModel[]) => {
        this.noVacantCountSectionTwo = detanees.filter((d: DetaineeModel) => !d.isVacant).length;
      })
      
      this.vacantCountSectionTotal = this.vacantCountSectionOne + this.vacantCountSectionTwo;
      this.noVacantCountSectionTotal = this.noVacantCountSectionOne + this.noVacantCountSectionTwo;
  }

}
