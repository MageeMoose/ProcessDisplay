import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RoomlistSectionOneComponent } from './components/roomlist-section-one/roomlist-section-one.component';
import { RoomlistSectionTwoComponent } from './components/roomlist-section-two/roomlist-section-two.component';
import { IncomingDetaineeComponent } from './components/incoming-detainee/incoming-detainee.component';
import { SecurityMessureComponent } from './components/security-meassure/security-messure.component';

@NgModule({
  declarations: [
    AppComponent,
    RoomlistSectionOneComponent,
    RoomlistSectionTwoComponent,
    IncomingDetaineeComponent,
    SecurityMessureComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
