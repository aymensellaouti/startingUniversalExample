import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CvComponent } from "./cv/cv.component";
import { ItemComponent } from "./item/item.component";
import { ListComponent } from "./list/list.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AddComponent } from "./add/add.component";
import { RouterModule } from "@angular/router";
import { DefaultImagePipe } from "./default-image.pipe";
import { DetailsCvComponent } from "./details-cv/details-cv.component";
@NgModule({
  declarations: [
    AddComponent,
    CvComponent,
    ListComponent,
    ItemComponent,
    DetailsCvComponent,
    DefaultImagePipe,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: "",
        component: CvComponent,
      },
      {
        path: "add",
        component: AddComponent,
      },
      {
        path: ":id",
        component: DetailsCvComponent,
      },
    ]),
    FormsModule,
  ],
  exports: [],
})
export class CvModule {}
