import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-child",
  templateUrl: "./child.component.html",
  styleUrls: ["./child.component.css"]
})
export class ChildComponent implements OnInit {
  @Input() public parentData;
  @Input("parentData") public pData; //another way of declaring a input variable

  @Output() public childEvent = new EventEmitter();

  fireEvent() {
    this.childEvent.emit("child event emitted");
  }
  constructor() {}

  ngOnInit() {}
}
