import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";
import { HttpserviceService} from '../../httpservice.service';
import { RouterModule, Router,ActivatedRoute } from '@angular/router';
import { EventEmitter } from '@angular/core';
import {Response } from '@angular/http';

@Component({
  selector: 'app-bookcontent',
  templateUrl: './bookcontent.component.html',
  styleUrls: ['./bookcontent.component.css']
})
export class BookcontentComponent implements OnInit {
bookname;
arr1=[];
arr2=[];
arr3=[];
arr4=[];
data;
    public filterQuery = "";
    public rowsOnPage = 1;
    public sortBy = "email";
    public sortOrder = "asc";

  constructor(private httpservice :HttpserviceService,private routes:ActivatedRoute) {

    this.httpservice.bookdetail.subscribe((data)=>
    {this.bookname=data;
    console.log("ZXc"+data);}
    );
    }

  ngOnInit() {


      this.httpservice.getcontent().subscribe(
  (response:Response)=>{
    

this.arr1.push(response);
  
this.data=this.arr1;

var jsonObject = JSON.parse(this.data[0]._body);

this.arr2.push(jsonObject);

this.data=this.arr2;
console.log(this.data[0]);

for (var key in this.arr2) {
    if (this.arr2.hasOwnProperty(key)) {
      for (var key2 in this.arr2[key]) {
         if ( this.arr2[key].hasOwnProperty(key2)) {
          this.arr3.push(this.arr2[key][key2]);

         }
        }
    }
}
this.data=this.arr3;
console.log("AAAASFASAF");
this.arr4=this.splitNChars(this.arr3[0].text,5000);
console.log(this.arr3);
 });
   // this.bookname=this.routes.snapshot.params['name'];



 


  }

  splitNChars(txt, num) {
  var result = [];
  for (var i = 0; i < txt.length; i += num) {
    result.push(txt.substr(i, num));
  }
  return result;
}



    public toInt(num: string) {
        return +num;
    }

    public sortByWordLength = (a: any) => {
        return a.city.length;
    }


}
