import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-pipe",
  templateUrl: "./pipe.component.html",
  styleUrls: ["./pipe.component.css"]
})
export class PipeComponent implements OnInit {
  public name = "angular";
  public message = "Saample angular project";
  public person = {
    firstname: "John",
    lastname: "doe"
  };
  constructor() {}

  ngOnInit() {}
}
