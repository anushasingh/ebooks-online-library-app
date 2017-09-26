import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { Http } from '@angular/http';
@Injectable()
export class HttpserviceService {

  constructor(private http:Http ) { }







getdata(genrename){

 




  return this.http.get('https://readbooks-c6c09.firebaseio.com/'+genrename+'.json');


}


}
