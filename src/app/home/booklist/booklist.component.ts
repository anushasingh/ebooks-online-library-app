import { Component, OnInit ,Input,Output} from '@angular/core';
import {Http} from "@angular/http";
import { HttpserviceService} from '../../httpservice.service';
import {Response } from '@angular/http';
import { RouterModule, Router } from '@angular/router';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css'],

})
export class BooklistComponent implements OnInit {

  constructor(private httpservice :HttpserviceService,private routes:Router) {
    }
 @Input() genrename="init";
    @Input() public data;
    public filterQuery = "";
    public rowsOnPage = 10;
    public sortBy = "email";
    public sortOrder = "asc";
    @Output() shoulddisplay=new EventEmitter<any>();
      @Output() bookcontent=new EventEmitter<any>();
  ngOnInit() {
 


// this.httpservice.getdata(this.genrename).subscribe(
//   (response:Response)=>{
//     console.log(response);
//     this.data=response;
 
//   });
   











  }

  


clickbook(bookname)
{
  console.log(bookname);

   this.httpservice.sendbookname(bookname);
//this.httpservice.bookdetail.emit(bookname);
this.bookcontent.emit(bookname);
//this.routes.navigate(['/detail']);
this.shoulddisplay.emit(false);




}
    

    public toInt(num: string) {
        return +num;
    }

    public sortByWordLength = (a: any) => {
        return a.city.length;
    }
}
