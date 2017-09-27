import { Pipe, PipeTransform } from '@angular/core';
import * as _ from "lodash";
@Pipe({
  name: 'datafilter'
})
export class DatafilterPipe implements PipeTransform {
 arr=[];
    transform(array: any[], query: string): any {
       // console.log(query);
// for(let i=0;i<array.length;i++)
// {
//     this.arr.push(array[i]);
// }

let name;
let author;

        if (query) {

            return _.filter(array, row=>{
                   name= row.name.indexOf(query) > -1;
                   author= row.author.indexOf(query)> -1;
               // ( row.name.indexOf(query) > -1)&& ( row.author.indexOf(query)> -1)
               return name||author;
                 
            }
                 ); 
                
            
              }
        
      

        return array;
    }
}
