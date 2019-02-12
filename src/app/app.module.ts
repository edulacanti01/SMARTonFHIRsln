import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ApiService } from '../services/ApiService'
import { patientInfo } from './patientInfo/patientInfo';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatPaginatorModule, MatSortModule } from '@angular/material';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    patientInfo,



  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserModule,
    MatTableModule,
    MatSortModule,


    MatPaginatorModule,
    BrowserAnimationsModule,
    MatTableModule
  ],

  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
