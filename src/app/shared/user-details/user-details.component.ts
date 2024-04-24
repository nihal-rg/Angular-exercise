import { Component, OnInit, OnDestroy } from "@angular/core";
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

  constructor(private userDetailsService: UserDetailsService) {}
  userFirstName = sessionStorage.getItem("First Name");
  userLastName = sessionStorage.getItem("Last Name");
  userId = sessionStorage.getItem("ID");

  getEditFormInvalid(name: string): boolean {
    if (this.editForm.get(name)!.touched && this.editForm.get(name)!.invalid) {
      return true;
    }
    return false;
  }

  ngOnInit(): void {
    this.closeButton = false;
    this.stateSubscription = this.userDetailsService
      .updateUser()
      .subscribe((state) => {
        this.state = state;
      });
    this.editForm = new FormGroup({
      firstname: new FormControl(null, Validators.required),
      lastname: new FormControl(null, Validators.required),
    });
  }

  onClose(): void {
    this.closeButton = true;
  }

  onCancel(): void {
    this.displayMode = true;
  }

  onEdit(): void {
    this.displayMode = false;
  }

  onSubmit(): void {
    this.isSaving = true;
    setTimeout(() => {
      this.closeButton = true;
      this.userFirstName = this.editForm.value["firstname"];
      this.userLastName = this.editForm.value["lastname"];
      for (let i = 0; i < this.userDetailsService.userDetails().length; i++) {
        if (
          this.userDetailsService.userDetails()[i]["id"].toString() ===
          this.userId
        ) {
          this.userDetailsService.userDetails()[i]["firstName"] =
            this.editForm.value["firstname"];
          this.userDetailsService.userDetails()[i]["lastName"] =
            this.editForm.value["lastname"];
        }
      }
    }, 2000);
  }
  ngOnDestroy() {
    this.stateSubscription.unsubscribe();
  }
}
