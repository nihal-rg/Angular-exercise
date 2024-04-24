import { Component, OnInit } from "@angular/core";

import { UserDetailsService } from "../shared/user-details.service";
@Component({
  selector: "app-dashboard-view",
  templateUrl: "./dashboard-view.component.html",
  styleUrls: ["./dashboard-view.component.css"],
})
export class DashboardViewComponent implements OnInit {
  constructor(private userDetailsService: UserDetailsService) {}
  users = this.userDetailsService.users;
  userValue = this.users.value;

  ngOnInit(): void {}
}
