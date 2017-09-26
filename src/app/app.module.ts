import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BooklistComponent } from './home/booklist/booklist.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import {DataTableModule} from "angular2-datatable";

import { HttpserviceService} from './httpservice.service';
import { HttpModule } from '@angular/http';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BooklistComponent
  ],
  imports: [
    BrowserModule,
    DataTableModule,
    HttpModule 
  ],
  providers: [ HttpserviceService],
  bootstrap: [AppComponent]
})




export class AppModule { }
