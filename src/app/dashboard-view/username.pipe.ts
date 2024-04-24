import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "username",
})
export class UsernamePipe implements PipeTransform {
  transform(value: any) {
    if (value.length > 20) {
      return value.substr(0, 20) + "...";
    }
    return value;
  }
}
