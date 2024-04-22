import { Component, OnInit, ViewChild, ViewContainerRef } from "@angular/core";
import { UserDetailsComponent } from "../shared/user-details/user-details.component";
import { UserDetailsService } from "../shared/user-details.service";
import { User } from "../shared/user.interface";
import { Subscription } from "rxjs";

@Component({
  selector: "app-user-view",
  templateUrl: "./user-view.component.html",
  styleUrls: ["./user-view.component.css"],
})
export class UserViewComponent implements OnInit {
  userSubscription!: Subscription;
  userName!: User[];
  @ViewChild("container", { read: ViewContainerRef, static: true })
  container!: ViewContainerRef;

  constructor(private userDetailService: UserDetailsService) {}
  buttonClicked = false;
  users = this.userDetailService.users;
  userValue = this.users.value;

  ngOnInit(): void {
    this.userSubscription = this.userDetailService.users.subscribe(
      (userName) => {
        this.userName = userName;
      }
    );
  }

  onClick(user: User) {
    this.buttonClicked = true;
    sessionStorage.setItem("First Name", user.firstName);
    sessionStorage.setItem("Last Name", user.lastName);
    sessionStorage.setItem("ID", user.id.toString());
    this.container.createComponent(UserDetailsComponent);
  }
}
