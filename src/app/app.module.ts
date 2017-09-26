import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BooklistComponent } from './home/booklist/booklist.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import {DataTableModule} from "angular2-datatable";

import { HttpserviceService} from './httpservice.service';
import { HttpModule } from '@angular/http';
import { BookcontentComponent } from './home/bookcontent/bookcontent.component';
import { FormsModule } from '@angular/forms';
import {DatafilterPipe} from './datafilter.pipe';

const appRoutes: Routes = [

 
 { path: '',      component: HomeComponent },
 
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BooklistComponent,
    BookcontentComponent,
    DatafilterPipe
  ],
  imports: [
    BrowserModule,
    DataTableModule,
    HttpModule ,
    RouterModule.forRoot(
      appRoutes // <-- debugging purposes only
    ),
    FormsModule
  ],
  providers: [ HttpserviceService],
  bootstrap: [AppComponent]
})




export class AppModule { }
