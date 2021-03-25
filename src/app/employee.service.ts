import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IEmployee } from "./employee";
import { Observable } from "rxjs";
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/obervable/throw';
// import { Observable } from 'rxjs/Observable';
@Injectable()
export class EmployeeService {
  constructor(private http: HttpClient) {}
  private _url = "/assets/data/employees.json";
  getEmployees() {
    return [
      { id: 1, name: "a", age: 10 },
      { id: 2, name: "b", age: 100 },
      { id: 3, name: "c", age: 1000 }
    ];
  }

  getEmployeesByHttp(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this._url)
    //.catch(this.errorHandler);
  }
  // errorHandler(errorHandler: any): Observable<IEmployee[]> {
  //   throw new Error("Method not implemented.");
  // }
  // errorHandler(error: HttpErrorResponse) {
  //   return throw(error.message || "server error");
  // }
}
