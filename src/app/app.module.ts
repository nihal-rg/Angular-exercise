import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { DashboardViewComponent } from "./dashboard-view/dashboard-view.component";
import { HeaderComponent } from "./header/header.component";

import { MatIconModule } from "@angular/material/icon";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [AppComponent, DashboardViewComponent, HeaderComponent],
  imports: [BrowserModule, AppRoutingModule, MatIconModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
