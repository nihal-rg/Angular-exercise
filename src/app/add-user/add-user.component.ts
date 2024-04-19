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

  constructor(private userDetailsService: UserDetailsService) {}

  ngOnInit(): void {
    this.addForm = new FormGroup({
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      id: new FormControl(null, [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(8),
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
    this.isSaving = true;
    setTimeout(() => {
      this.closeButton = true;
      this.userDetailsService.users.value.push(this.addForm.value);
    }, 2000);
  }
}
