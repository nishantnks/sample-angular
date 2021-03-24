import { Component, OnInit } from "@angular/core";
import { EmployeeService } from "../employee.service";

@Component({
  selector: "app-employee-details",
  templateUrl: "./employee-details.component.html",
  styleUrls: ["./employee-details.component.css"]
})
export class EmployeeDetailsComponent implements OnInit {
  // public employees = [
  //   { id: 1, name: "a", age: 10 },
  //   { id: 2, name: "b", age: 100 },
  //   { id: 3, name: "c", age: 1000 }
  // ];
  public employees = [];
  constructor(private _employeeService: EmployeeService) {}

  ngOnInit() {
    this.employees = this._employeeService.getEmployees();
  }
}
