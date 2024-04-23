import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { UserDetailsService } from "../shared/user-details.service";

@Component({
  selector: "app-add-user",
  templateUrl: "./add-user.component.html",
  styleUrls: [
    "../shared/user-details/user-details.component.css",
    "./add-user.component.css",
  ],
})
export class AddUserComponent implements OnInit {
  id!: number;
  firstName!: string;
  lastName!: string;
  closeButton!: boolean;
  isSaving!: boolean;
  addForm!: FormGroup;
  userExists!: boolean;

  constructor(private userDetailsService: UserDetailsService) {}

  ngOnInit(): void {
    this.addForm = new FormGroup({
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      id: new FormControl(null, [
        Validators.required,
        Validators.min(10000000),
        Validators.max(99999999),
      ]),
    });
  }

  onClose() {
    this.closeButton = true;
  }

  getEditFormInvalid(name: string) {
    if (this.addForm.get(name)!.touched && this.addForm.get(name)!.invalid) {
      return true;
    }
    return false;
  }

  onSubmit() {
    let isUserIdRepeated = false;
    for (let i = 0; i < this.userDetailsService.users.value.length; i++) {
      if (this.userDetailsService.users.value[i]["id"] === this.id) {
        isUserIdRepeated = true;
        break;
      }
    }
    this.isSaving = true;
    setTimeout(() => {
      if (isUserIdRepeated) {
        this.closeButton = false;
        this.userExists = true;
        this.isSaving = false;
      } else {
        this.closeButton = true;
        this.userDetailsService.users.value.push(this.addForm.value);
      }
    }, 2000);
  }
}
