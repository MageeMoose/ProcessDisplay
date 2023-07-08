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
    Promise.all([
      this.db.getDetainees('section-one'),
      this.db.getDetainees('section-two')
    ]).then(([sectionOneDetainees, sectionTwoDetainees]) =>{
      this.vacantCountSectionOne = sectionOneDetainees.filter((d: DetaineeModel) => d.isVacant).length;
      this.vacantCountSectionTwo = sectionTwoDetainees.filter((d: DetaineeModel) => d.isVacant).length;
      
      this.noVacantCountSectionOne = sectionOneDetainees.filter((d: DetaineeModel) => !d.isVacant).length;
      this.noVacantCountSectionTwo = sectionTwoDetainees.filter((d: DetaineeModel) => !d.isVacant).length;

      this.vacantCountSectionTotal = this.vacantCountSectionOne + this.vacantCountSectionTwo;
      this.noVacantCountSectionTotal = this.noVacantCountSectionOne + this.noVacantCountSectionTwo;
    });
  }
}
