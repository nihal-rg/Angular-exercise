import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardViewComponent } from "./dashboard-view/dashboard-view.component";
import { UserDetailsComponent } from "./shared/user-details/user-details.component";
import { UserViewComponent } from "./user-view/user-view.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { AppComponent } from "./app.component";
import { EmptyComponent } from "./empty/empty.component";

const routes: Routes = [
  { path: "", component: EmptyComponent },
  {
    path: "homepage",
    component: DashboardViewComponent,
  },
  {
    path: "user",
    component: UserViewComponent,
  },
  { path: "**", component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
