import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RoomlistSectionOneComponent } from './components/roomlist-section-one/roomlist-section-one.component';
import { RoomlistSectionTwoComponent } from './components/roomlist-section-two/roomlist-section-two.component';
import { IncomingDetaineeComponent } from './components/incoming-detainee/incoming-detainee.component';
import { SecurityMessureComponent } from './components/security-meassure/security-messure.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import { AddDetaineeDialogComponent } from './components/add-detainee-dialog/add-detainee-dialog.component';
import { CountVacancySectionOneComponent } from './components/count-vacancy-section-one/count-vacancy-section-one.component';
import { CountVacancySectionTwoComponent } from './components/count-vacancy-section-two/count-vacancy-section-two.component';
import {MatDialogModule} from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    RoomlistSectionOneComponent,
    RoomlistSectionTwoComponent,
    IncomingDetaineeComponent,
    SecurityMessureComponent,
    AddDetaineeDialogComponent,
    CountVacancySectionOneComponent,
    CountVacancySectionTwoComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NoopAnimationsModule,
    MatTableModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
