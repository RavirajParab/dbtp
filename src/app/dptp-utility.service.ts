import { Injectable } from '@angular/core';
import {User, Position} from '../IDBTP';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class DptpUtilityService {
  
  constructor(private myHttpClient:HttpClient) { }
  //registration : POST
  registerUser(user: User): Observable<{}>{
    // registration is a POST operation
   return this.myHttpClient
              .post('https://mycrudops.herokuapp.com/users',user);
  }

  // get the user details using the userName: GET
  userExists(username: string): Observable<boolean>{
    return this.myHttpClient
               .get(`https://mycrudops.herokuapp.com/users?Username=${username}`)
               .pipe(map((data: Array<any>)=> data.length?true:false));
  }

  //Takes in an object which as an Email and a Password : GET
  aunthenticateUser(user: {Email,Password}):Observable<boolean>{
    return this.myHttpClient
               .get(`https://mycrudops.herokuapp.com/users?Email=${user.Email}&Password=${user.Password}`)
               .pipe(map((data: Array<any>)=>data.length?true:false));
  }

  // get the securities/symbols
  getSecurities ():Observable<any>{
    return this.myHttpClient
               .get(`https://mycrudops.herokuapp.com/finance`);
  }

  //gets the positions : GET
  getPositions ():Observable<{}>{
    return this.myHttpClient
               .get('https://mycrudops.herokuapp.com/positions');
  }

  //add position : POST
  addPosition(position: Position): Observable<{}>{
    // registration is a POST operation
   return this.myHttpClient
              .post('https://mycrudops.herokuapp.com/positions',position);
  }

  // update the position : PUT
  updatePosition(position: Position): Observable<{}>{
    // registration is a POST operation
   return this.myHttpClient
              .put(`https://mycrudops.herokuapp.com/positions/${position.id}`,position);
  }

  // export the report
  downloadFile(data,headerArr, filename='data') {
    let csvData = this.ConvertToCSV(data,headerArr);
    let blob = new Blob(['\ufeff' + csvData], { type: 'text/csv;charset=utf-8;' });
    let dwldLink = document.createElement("a");
    let url = URL.createObjectURL(blob);
    let isSafariBrowser = navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1;
    if (isSafariBrowser) {  //if Safari open in new window to save file with random filename.
        dwldLink.setAttribute("target", "_blank");
    }
    dwldLink.setAttribute("href", url);
    dwldLink.setAttribute("download", filename + ".csv");
    dwldLink.style.visibility = "hidden";
    document.body.appendChild(dwldLink);
    dwldLink.click();
    document.body.removeChild(dwldLink);
}

ConvertToCSV(objArray, headerList) {
     let array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
     let str = '';
     let row = 'S.No,';

     for (let index in headerList) {
         row += headerList[index] + ',';
     }
     row = row.slice(0, -1);
     str += row + '\r\n';
     for (let i = 0; i < array.length; i++) {
         let line = (i+1)+'';
         for (let index in headerList) {
            let head = headerList[index];

             line += ',' + array[i][head];
         }
         str += line + '\r\n';
     }
     return str;
 }
}
