import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IEmployee } from "./employee";
// import { Observable } from 'rxjs/Observable';
import { Observable } from "rxjs";
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

  // getEmployees():Observable<IEmployee[]> {
  // return this.http.get<IEmployee[]>(this._url);
  // }
  getEmployeesByHttp(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this._url);
  }
}
