import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { User } from "./user.interface";

@Injectable({
  providedIn: "root",
})
export class UserDetailsService {
  private users = new BehaviorSubject([
    { firstName: "Mike", lastName: "Wheeler", id: 16850011 },
    { firstName: "Dustin", lastName: "Henderson", id: 17469805 },
    { firstName: "Lucas", lastName: "Sinclair", id: 15678360 },
    { firstName: "Will", lastName: "Byers", id: 18273800 },
  ]);

  constructor() {}

  userDetails(): User[] {
    return this.users.value;
  }

  updateUser(): Observable<User[]> {
    return this.users.pipe();
  }
}
