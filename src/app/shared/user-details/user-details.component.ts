import { Component, OnInit } from "@angular/core";
import { UserDetailsService } from "../user-details.service";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-user-details",
  templateUrl: "./user-details.component.html",
  styleUrls: ["./user-details.component.css"],
})
export class UserDetailsComponent implements OnInit {
  displayMode = true;
  closeButton!: boolean;
  stateSubscription!: Subscription;
  state!: any;
  editForm!: FormGroup;
  isSaving!: boolean;

  constructor(
    private user: UserDetailsService,
    private route: Router
  ) {}
  userFirstName = sessionStorage.getItem("First Name");
  userLastName = sessionStorage.getItem("Last Name");
  userId = sessionStorage.getItem("ID");

  getEditFormInvalid(name: string) {
    if (this.editForm.get(name)!.touched && this.editForm.get(name)!.invalid) {
      return true;
    }
    return false;
  }

  ngOnInit(): void {
    this.closeButton = false;
    this.stateSubscription = this.user.users.subscribe((state) => {
      this.state = state;
    });
    this.editForm = new FormGroup({
      firstname: new FormControl(null, Validators.required),
      lastname: new FormControl(null, Validators.required),
    });
  }

  onClose() {
    this.closeButton = true;
  }

  onCancel() {
    this.displayMode = true;
  }

  onEdit() {
    this.displayMode = false;
  }

  onSubmit() {
    this.isSaving = true;
    setTimeout(() => {
      this.closeButton = true;
      this.userFirstName = this.editForm.value["firstname"];
      this.userLastName = this.editForm.value["lastname"];
      for (let i = 0; i < this.user.users.value.length; i++) {
        if (this.user.users.value[i]["id"].toString() === this.userId) {
          this.user.users.value[i]["firstName"] =
            this.editForm.value["firstname"];
          this.user.users.value[i]["lastName"] =
            this.editForm.value["lastname"];
        }
      }
    }, 2000);
  }
}
