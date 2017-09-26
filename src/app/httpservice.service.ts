import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { Http } from '@angular/http';
import { EventEmitter } from '@angular/core';
@Injectable()
export class HttpserviceService {
bookname;
bookdetail=new EventEmitter<any>();
  constructor(private http:Http ) {


   }







getdata(genrename){

 




  return this.http.get('https://readbooks-c6c09.firebaseio.com/'+genrename+'.json');


}
getcontent()
{
  return this.http.get(' https://readbooksdetail.firebaseio.com/'+this.bookname+'.json');
 
}

sendbookname(name)
{

this.bookname=name;
}

}
