import { Component, OnInit ,Input} from '@angular/core';
import {Http} from "@angular/http";
import { HttpserviceService} from '../../httpservice.service';
import {Response } from '@angular/http';
@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css'],

})
export class BooklistComponent implements OnInit {

  constructor(private httpservice :HttpserviceService) {
    }
 @Input() genrename="init";
    @Input() public data;
    public filterQuery = "";
    public rowsOnPage = 10;
    public sortBy = "email";
    public sortOrder = "asc";
  ngOnInit() {
 


// this.httpservice.getdata(this.genrename).subscribe(
//   (response:Response)=>{
//     console.log(response);
//     this.data=response;
 
//   });
   











  }

  



    

    public toInt(num: string) {
        return +num;
    }

    public sortByWordLength = (a: any) => {
        return a.city.length;
    }
}
