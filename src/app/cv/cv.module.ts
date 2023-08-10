import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CvComponent } from "./cv/cv.component";
import { ItemComponent } from "./item/item.component";
import { ListComponent } from "./list/list.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AddComponent } from "./add/add.component";
import { RouterModule } from "@angular/router";
import { DefaultImagePipe } from "./default-image.pipe";
import { CardComponent } from "./card/card.component";
@NgModule({
  declarations: [
    AddComponent,
    CardComponent,
    CvComponent,
    ListComponent,
    ItemComponent,
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
    ]),
    FormsModule,
  ],
  exports: [],
})
export class CvModule {}
