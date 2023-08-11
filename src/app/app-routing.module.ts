import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";

const routes: Routes = [
  {
    path: "cv",
    loadChildren: () => import("./cv/cv.module").then((m) => m.CvModule),
  },
  /*   {
    path: "",
    redirectTo: "cv",
    pathMatch: "full",
  }, */
  { path: "home", component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
