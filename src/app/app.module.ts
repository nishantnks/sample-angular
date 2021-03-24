import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { EmployeeListComponent } from "./employee-list/employee-list.component";
import { EmployeeDetailsComponent } from "./employee-details/employee-details.component";
import { EmployeeService } from './employee.service';
import { ChildComponent } from './child/child.component';
import { PipeComponent } from './pipe/pipe.component';
import { HttpSampleComponent } from './http-sample/http-sample.component';
// import { EmployeeComponent } from './employee/employee.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    EmployeeListComponent,
    EmployeeDetailsComponent,
    ChildComponent,
    PipeComponent,
    HttpSampleComponent
  ],
  bootstrap: [AppComponent],
  providers: [EmployeeService]
})
export class AppModule {}
