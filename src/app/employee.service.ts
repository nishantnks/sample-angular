import { Injectable } from "@angular/core";

@Injectable()
export class EmployeeService {
  getEmployees() {
    return [
      { id: 1, name: "a", age: 10 },
      { id: 2, name: "b", age: 100 },
      { id: 3, name: "c", age: 1000 }
    ];
  }
  constructor() {}
}
