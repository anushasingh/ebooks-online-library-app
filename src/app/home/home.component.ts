import { Component, OnInit } from '@angular/core';
import { HttpserviceService} from '../httpservice.service';
import {Response } from '@angular/http';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  // to add data in database author name and readbooks detalbookname should exactly be the same
  // to do: pagination color, duplicate additions in table on multiple clicks of genre
genrename="adventure";
cond;
data;
arr1=[];
arr2=[];
arr3=[];

  constructor(private httpservice :HttpserviceService) { }

  ngOnInit() {
    this.changegenrename("adventure");
  }
changegenrename(genrename)
{

 this.data=null;

 this.arr1=[];
 this.arr2=[];
 this.arr3=[];

  this.genrename=genrename.toLowerCase();
  this.cond=true;
  this.httpservice.getdata(this.genrename).subscribe(
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
console.log(this.arr3);
 });
}
changeview(value)

{
  console.log("AaaAAAs");
  console.log(value);
this.cond=value;
}
   

}
