import { Component, OnInit } from "@angular/core";
import { EmployeeService } from "../employee.service";

@Component({
  selector: "app-employee-list",
  templateUrl: "./employee-list.component.html",
  styleUrls: ["./employee-list.component.css"]
})
export class EmployeeListComponent implements OnInit {
  // public employees = [
  //   { id: 1, name: "a", age: 10 },
  //   { id: 2, name: "b", age: 100 },
  //   { id: 3, name: "c", age: 1000 }
  // ];
  public employees = [];
  constructor(private _empolyeeService: EmployeeService) {}

  ngOnInit() {
    this.employees = this._empolyeeService.getEmployees();
  }
}
