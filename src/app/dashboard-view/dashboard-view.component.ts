import { Component, OnInit, ViewChild, ViewContainerRef } from "@angular/core";

import { UserDetailsService } from "../shared/user-details.service";
import { Subscription } from "rxjs";
import { User } from "../shared/user.interface";
import { UserDetailsComponent } from "../shared/user-details/user-details.component";

@Component({
  selector: "app-dashboard-view",
  templateUrl: "./dashboard-view.component.html",
  styleUrls: ["./dashboard-view.component.css"],
})
export class DashboardViewComponent implements OnInit {
  userSubscription!: Subscription;
  userName!: User[];
  @ViewChild("container", { read: ViewContainerRef, static: true })
  container!: ViewContainerRef;

  constructor(private userDetailsService: UserDetailsService) {}

  users = this.userDetailsService.users;
  userValue = this.users.value;

  ngOnInit(): void {
    this.userSubscription = this.userDetailsService.users.subscribe(
      (userName) => {
        this.userName = userName;
      }
    );
  }

  onClick(user: User) {
    sessionStorage.setItem("First Name", user.firstName);
    sessionStorage.setItem("Last Name", user.lastName);
    sessionStorage.setItem("ID", user.id.toString());
    this.container.createComponent(UserDetailsComponent);
  }
}
