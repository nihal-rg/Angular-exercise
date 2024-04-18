import { Component, OnInit } from "@angular/core";

import { Users } from "./user.model";

@Component({
  selector: "app-dashboard-view",
  templateUrl: "./dashboard-view.component.html",
  styleUrls: ["./dashboard-view.component.css"],
})
export class DashboardViewComponent implements OnInit {
  users: Users[] = [
    { firstName: "Mike", lastName: "Wheeler", id: 16850011 },
    { firstName: "Dustin", lastName: "Henderson", id: 17469805 },
    { firstName: "Lucas", lastName: "Sinclair", id: 15678360 },
    { firstName: "Will", lastName: "Byers", id: 18273800 },
  ];

  constructor() {}

  ngOnInit(): void {}
}
