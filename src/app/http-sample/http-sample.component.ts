import { Component, OnInit } from "@angular/core";
import { EmployeeService } from "../employee.service";

@Component({
  selector: "app-http-sample",
  templateUrl: "./http-sample.component.html",
  styleUrls: ["./http-sample.component.css"]
})
export class HttpSampleComponent implements OnInit {
  public employees = [];
  constructor(private _employeeService: EmployeeService) {}

  ngOnInit() {
    this._employeeService
      .getEmployeesByHttp()
      .subscribe(data => (this.employees = data));
  } 
}
