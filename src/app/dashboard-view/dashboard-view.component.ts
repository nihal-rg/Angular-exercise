import { Component, OnInit } from "@angular/core";

import { Users } from "./user.model";

@Component({
  selector: "app-dashboard-view",
  templateUrl: "./dashboard-view.component.html",
  styleUrls: ["./dashboard-view.component.css"],
})
export class DashboardViewComponent implements OnInit {
  users: Users[] = [
    new Users("Mike", "Wheeler", 16850011),
    new Users("Dustin", "Henderson", 17469805),
    new Users("Lucas", "Sinclair", 15678360),
    new Users("Will", "Byers", 18273800),
  ];

  constructor() {}

  ngOnInit(): void {}
}
