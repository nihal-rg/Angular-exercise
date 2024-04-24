import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardViewComponent } from "./dashboard-view/dashboard-view.component";
import { UserDetailsComponent } from "./shared/user-details/user-details.component";

const routes: Routes = [
  {
    path: "homepage",
    component: DashboardViewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
